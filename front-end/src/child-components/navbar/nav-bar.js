import {Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap'
import './navbar-style.css'
import {useState} from 'react'
import Example from '../add-restaurant-form/add-restaurant'


const NavBar = () => {

  const [show, setShow] = useState(false)

  return (
    <>
    <Navbar variant="dark" bg="light" expand="sm">
    <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="custom-toggler" id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link >Add A Resteraunt</Nav.Link>
        <Nav.Link href="#link">About Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Brand href="#home">Halal-Finder</Navbar.Brand>
  </Navbar>
  </>
  )
}

export default NavBar