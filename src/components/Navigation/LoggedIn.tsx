import React from 'react'
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { selectLoggedInName } from '../../store/user/selectors';
import { logOut } from '../../store/user/actions';

export default function LoggedIn() {
  const dispatch = useDispatch()
  const history = useHistory()
  const name = useSelector(selectLoggedInName)

  const logOutHandler = () => {
    dispatch(logOut())
    history.push("/login")
  }

  return (
    <Nav style={{ width: "100%" }} fill>
      <div className="nav-items-left">
        <Nav.Link as={NavLink} to="/household" >Household</Nav.Link>
        <Nav.Link as={NavLink} to="/tasks" >Tasks</Nav.Link>
      </div>
      <NavDropdown title={`Logged in as ${name}`} id="nav-dropdown">
        <NavDropdown.Item as={NavLink} to="/settings" className="nav-dropdown-settings">Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={logOutHandler}>Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  )
}
