//import npm modules
import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import React from "react";
// import OffCanvas from 'react-aria-offcanvas'
import "./navbar-style.css";

//import files
import AddRestaurantForm from "../add-restaurant-form/add-restaurant";

const offCanvasStyle = {
  content: {
    background: "rgba(128, 128, 128, .9)",
    color: "white",
  },
};

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="nav-holder">
      <Navbar variant="dark" bg="light" expand="sm">
        <Navbar.Toggle
          className="custom-toggler"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="custom-toggler" id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={handleShow}>Add A Resteraunt</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">Halal-Finder</Navbar.Brand>
      </Navbar>

      {/* <OffCanvas
      isOpen={show}
      onClose={handleClose}
      position='top'
      width="100%"
      height="80%"
      trapFocusAfterOpen	
      style={offCanvasStyle}
      closeOnEsc	
     >
      <div onClick={handleClose} className="Offcanvas-close">X</div>
      <AddRestaurantForm handleClose={handleClose}/>
     </OffCanvas> */}
    </div>
  );
};

export default NavBar;
