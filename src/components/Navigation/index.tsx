import React, { useEffect } from 'react'
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom'
import logo from '../../dustly-logo.svg'
import { useSelector } from 'react-redux';
import { selectToken } from '../../store/user/selectors';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

export default function Navigation(props: {userName: string}) {
  const token = useSelector(selectToken)
  const navBarControl = token ? <LoggedIn /> : <LoggedOut />

  useEffect(() => {
    console.log("token", token)
  }, [token])

  return (
    <Navbar bg="white" expand="sm" className="navigation">
      <Navbar.Brand as={NavLink} to="/">
        <img src={logo} alt='Logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          {navBarControl}
      </Navbar.Collapse>
    </Navbar>
  )
}
