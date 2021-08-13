import React, { useState }from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { categoryList } from '../data';

import '../css/nav-bar.scss'


const  NavBar:React.FC = ()  => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div id="menu-bar">
            <Navbar collapseOnSelect expand="md" bg="dark"  variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> Fashion Style </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            <Form inline>
                                <FormControl type="text" placeholder="Search..." className="mr-sm-2 nav-form" />
                            </Form>
                            </Nav>
                        <Nav>
                        <Nav.Link href='/' >Home</Nav.Link>
                            <Nav.Link href="#pages">Pages</Nav.Link>
                            <Nav.Link href="#blogs">Blogs</Nav.Link>
                            <NavDropdown title="Category" id="collasible-nav-dropdown">
                            {
                                categoryList.map((category, i) => {
                                    return (
                                        <NavDropdown.Item href={"/" + category} key={i} >
                                            {category}
                                        </NavDropdown.Item>
                                    )
                                })
                            }
                            </NavDropdown>
                            { !isLoggedIn && <Nav.Link eventKey={2} href="/login">Login</Nav.Link> }
                            { isLoggedIn && <Nav.Link href="#profile"> <FontAwesomeIcon  icon={faUserCircle} size="lg"/></Nav.Link> }
                            <Nav.Link href="#Shopping"><FontAwesomeIcon  className="mr-1" icon={faShoppingCart} size="sm" /> cart[0] </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;