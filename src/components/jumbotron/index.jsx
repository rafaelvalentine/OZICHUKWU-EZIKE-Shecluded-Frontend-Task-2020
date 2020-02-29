import React from 'react'
import { Link } from 'react-router-dom' 
import  '../../themes/sass/components/Jumbutron.sass';
const index = () =>  (
  <div className="container-jumbutron">
    <div className="one-half left">
      <h1>Cats' list</h1>
      <Link to='/cats' className="cta">Let's Go</Link>
    </div>
    <div className="one-half right">
      <h1>The Lord of the Rings</h1>
      <Link to='/lotr' className="cta">Let's Go</Link>
    </div>
  </div>
  )


export default index
