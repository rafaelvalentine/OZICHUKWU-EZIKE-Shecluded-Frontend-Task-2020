import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from '../../components/lotrCard'
import '../../themes/sass/pages/LOTR.sass'

const ListCharacter = props =>{
  return (
  props.data.map(charater =>(
    <Card key={charater._id || Math.random()} {...charater}/>
  ))
)}
export default class index extends Component {

state={
  data:[]
}
  
  handleFetchCharacters  = () => {
    this.props.handlePageLoader(true)
    return this.props.handleFetchCharacters()
      .then(()=>{
        setTimeout(() => {
          this.props.handlePageLoader(false)
        }, 2000);
      })
  }
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.data.length !== prevState.data.length ){
      return {data: nextProps.data};
      }
    else return null;
  }
  componentDidUpdate (prevProps, prevState){
  }
  componentDidMount(){
      this.handleFetchCharacters()
  }
  render() {
    return (
      <>
        <Container className='wrapper_lotr py-4' fluid>
          <div className='title'>
              <p>Welcome to MiddleEarth</p>
              <span>"Where there's life there's hope, and need of vittles."</span>
                <sub>― J.R.R. Tolkien, The Lord of the Rings </sub>
          </div>
          <Row>
               <ListCharacter data={this.state.data} />
          </Row>
        </Container>
      </>
    )
  }
}
