import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from 'react-router-dom'
import logo from '../../dustly-logo.svg'
import './navigation.scss'

export default function Navigation() {
  return (
    <Navbar bg="white" expand="sm">
      <Navbar.Brand as={NavLink} to="/">
        <img src={logo} alt='Logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
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
          {/* {loginLogoutControls} */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
