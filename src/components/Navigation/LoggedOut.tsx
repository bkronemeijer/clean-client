import React from 'react'
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom'

export default function LoggedOut() {
  return (
    <Nav style={{ width: "100%" }} fill>
      {/* <div className="nav-items-left"> */}
        <Nav.Link as={NavLink} to="/login" >Log in</Nav.Link>
        <Nav.Link as={NavLink} to="/signup" >Sign up</Nav.Link>
      {/* </div> */}
    </Nav>
  )
}
