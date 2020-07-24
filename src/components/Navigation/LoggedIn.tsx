import React from 'react'
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from 'react-router-dom'

export default function LoggedIn() {
  return (
    <Nav style={{ width: "100%" }} fill>
      <div className="nav-items-left">
        <Nav.Link as={NavLink} to="/household" >Household</Nav.Link>
        <Nav.Link as={NavLink} to="/tasks" >Tasks</Nav.Link>
      </div>
      <NavDropdown title="Logged in as USER" id="nav-dropdown">
        <NavDropdown.Item as={NavLink} to="/settings" className="nav-dropdown-settings">Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  )
}
