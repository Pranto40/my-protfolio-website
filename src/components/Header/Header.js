import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <Navbar className='sticky-top' style={{backgroundColor: '#AAFF00'}} collapseOnSelect expand="lg">
        <Container>
        <Link className="navbar-brand" to="/">Grocery Stock</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto mt-3">
            <CustomLink className="nav-link mx-2 text-center" aria-current="page" to="/">Home</CustomLink>
            <CustomLink className="nav-link mx-2 text-center" aria-current="page" to="/project">Project</CustomLink>
            <CustomLink className="nav-link text-center" to='/contactUs'>Contact Us</CustomLink>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;