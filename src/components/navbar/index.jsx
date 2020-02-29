import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from "react-router-dom";
import '../../themes/sass/components/navbar.sass'

export default () => {
  return (
    <Navbar bg="primary" variant="dark" sticky="top">
    <Navbar.Brand href="#">My List</Navbar.Brand>
    <Nav className="ml-auto">
      <NavLink className='nav-link' exact activeStyle={{borderBottom:'1px solid #fff'}} to='/'>Home</NavLink>
      <NavLink className='nav-link' to='/cats' activeStyle={{borderBottom:'1px solid #fff'}}>Cats</NavLink>
      <NavLink className='nav-link' to='/lotr' activeStyle={{borderBottom:'1px solid #fff'}}>LOTR</NavLink>
    </Nav>
  </Navbar>
  )
}
