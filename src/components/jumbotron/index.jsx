import React,{ useState }  from 'react'
import { Link } from 'react-router-dom' 
import  '../../themes/sass/components/Jumbutron.sass';


export default () =>  {
  
  const [state, setstate] = useState({hoverStyle:''})
  const mouseOverLeft = () =>{
    if(state.hoverStyle === ''){
      setstate({hoverStyle:'left-is-hovered'})
      return
    }
    if(state.hoverStyle === 'right-is-hovered'){
      setstate({hoverStyle:'left-is-hovered'})
      return
    }
    setstate({hoverStyle:''})
  }
  const mouseOverRight = () =>{
    if(state.hoverStyle === ''){
      setstate({hoverStyle:'right-is-hovered'})
      return
    }
    if(state.hoverStyle === 'left-is-hovered'){
      setstate({hoverStyle:'right-is-hovered'})
      return
    }
    setstate({hoverStyle:''})
  }
  return(
  <div className={`container-jumbutron ${state.hoverStyle}`}>
    <div className="one-half left" onMouseEnter={mouseOverLeft} onMouseLeave={mouseOverLeft} >
      <h1>Cats' list</h1>
      <Link to='/cats' className="cta">Let's Go</Link>
    </div>
    <div className="one-half right" onMouseEnter={mouseOverRight} onMouseLeave={mouseOverRight}>
      <h1>The Lord of the Rings</h1>
      <Link to='/lotr' className="cta">Let's Go</Link>
    </div>
  </div>
  )
}


