import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="d-flex justify-content-around">
                <Navbar.Brand>Quotes</Navbar.Brand>
                <Nav.Link><Link to="/">Random</Link></Nav.Link>
                <Nav.Link><Link to="/favourite">Favourite</Link></Nav.Link>
            </Navbar>
        </>
    )
}

export default Header;
