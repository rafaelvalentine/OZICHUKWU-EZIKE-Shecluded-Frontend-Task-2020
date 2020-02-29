import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from '../../components/catCard'
import '../../themes/sass/pages/Cats.sass'
import Pagination from '../../tools/Pagination'
const ListCats = props =>{
  let breeds ={
    name: 'nil',
    temperament:'not stated',
    life_span:'not stated',
    shedding_level:'unknown',
    dog_friendly:'not specified',
    child_friendly:'unclear'

  }
  return (
   
  props.data.map(cat=>(
    <Card key={cat.id || Math.random()} {...cat} breeds={cat.breeds[0]||breeds}/>
  ))
)}
export default class Cats extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()  
}
  state = {
    firstPage: 1,
    currentPage: 1,
    usersPerPage: 0,
    pageLimit: 5,
    upperPageBound: 10,
    lowerPageBound: 0,
    count:0,
    limit:0,
    data:[],
    params:{
        limit:'20',
        page:'0',
        order:'DESC',
        breed_id:'',
        size:'med',
        mime_types:'',
        format:'JSON'
    }
  }

  scrollToTop = () => window.scrollTo(0, this.myRef.current.offsetTop)
   handlePagnationUp = (e) => {
    e.target.blur()
    if (this.state.currentPage >= this.state.firstPage) {
       this.setState((prevState, props) => {
        return {currentPage: prevState.currentPage + 1};
      }, ()=> this.scrollToTop())
    }
    if (this.state.currentPage === this.state.upperPageBound) {
      let upperPageBound = this.state.upperPageBound + this.state.pageLimit
      let lowerPageBound = this.state.lowerPageBound + this.state.pageLimit
      this.setState((prevState, props) => {
       return { upperPageBound, lowerPageBound }
     })
   }
  }
 handlePagnationDown = (e) => {
    e.target.blur()
    if (this.state.currentPage === this.state.lowerPageBound + 1) {
      let upperPageBound = this.state.upperPageBound - this.state.pageLimit
      let lowerPageBound = this.state.lowerPageBound - this.state.pageLimit
      this.setState((prevState, props) => {
       return { upperPageBound, lowerPageBound }
     })
   }
   if (this.state.currentPage !== this.state.firstPage) { 
     this.setState((prevState, props) => {
      return {currentPage: prevState.currentPage - 1};
    }, ()=> this.scrollToTop())
  }
  }
    handleDataRange = e => {
    e.target.blur()
    const callback = () => {
      this.renderPageNumbers()
      this.scrollToTop()
      console.log('this.state.usersPerPage :', this.state.usersPerPage);
    }
    
    let numberToShow = Number(e.target.value)
    console.log("numberToShow:", numberToShow)
    return this.setState({ usersPerPage: numberToShow, currentPage: 1 }, ()=> this.handleFetchCats({...this.state.params, page: 0, limit: numberToShow})
      .then(callback()))
      
  }

  renderPageNumbers = () =>{ 
    let pageList = []
    let length = Math.ceil( this.state.count / this.state.usersPerPage)
    for(let index = 1; index <= length; index++) {
    const element = {
      id: index,
      page: index
    };
    pageList.push(element)
  }
 return pageList
}
selectedPage = page =>{
  this.scrollToTop()
  this.setState({currentPage: page}, ()=> this.handleFetchCats({...this.state.params, page: page-- }))
}
/**
 * this functions fetches a cats from the cats API and dispatches an action tom the store
 */
handleFetchCats = params => {
  this.props.handlePageLoader(true)
  console.log(params)
  return this.props.handleFetchCats(params)
    .then(()=>{
      setTimeout(() => {
        this.renderPageNumbers()
        this.props.handlePageLoader(false)
      }, 2000);
    })
}
static getDerivedStateFromProps(nextProps, prevState){
  if(nextProps.data.length !== prevState.data.length ){
    return {data: nextProps.data,
    currentPage: (nextProps.page + 1),
    usersPerPage: nextProps.limit,
    count: nextProps.count
      };
    }
  if(Number(nextProps.page) !== (Number(prevState.currentPage) + 1 )){
    return {data: nextProps.data,
    currentPage: (nextProps.page + 1),
    usersPerPage: nextProps.limit,
    count: nextProps.count
      };
  }
  else return null;
}
componentDidUpdate (prevProps, prevState){
}
componentDidMount(){
  this.handleFetchCats(this.state.params)
}
  render() {

    const indexOfLastUser = this.state.currentPage * this.state.usersPerPage
    const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage
    const allUsers = this.state.count
    let newindexOfFirstUser = indexOfFirstUser + 1
    let pageUsers = this.state.usersPerPage + indexOfFirstUser
    return (
      <>
      <Container className='wrapper py-4' fluid >
              <div className='hello-kitty pb-3' ref={this.myRef}>
                Hello Kitty
              </div>
              <Row className='justify-content-start'>
                  <ListCats data={this.state.data} />
              </Row>
              <Pagination
                  className='pagination' 
                  data={this.state}
                  allUsers={allUsers}
                  pageUsers={pageUsers}
                  newindexOfFirstUser={newindexOfFirstUser}
                  handlePagnationUp={this.handlePagnationUp}
                  handlePagnationDown={this.handlePagnationDown}
                  handleDataRange={this.handleDataRange}
                  pageNumbers={this.renderPageNumbers}
                  selectedPage={this.selectedPage}
                  pageLimit={this.state.pageLimit}
                  upperPageBound={this.state.upperPageBound}
                  lowerPageBound={this.state.lowerPageBound}
              />
          </Container>
      </>
    )
  }
}