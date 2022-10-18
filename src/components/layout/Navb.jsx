import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navb = () => {
  return (
    <Navbar bg="dark"  variant='dark' expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className='nav-link' >Home</Link>
            <Link to='/producto/create' className='nav-link'>Promociones</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/login' className="nav-link">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navb;
