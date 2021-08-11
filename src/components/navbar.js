import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { arrCategory } from '../stock'



class NavBar extends React.Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="md" bg="dark"  variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Fashion Style</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href='/e-commerce-template/' >Home</Nav.Link>
                                <Nav.Link href="#pages">Pages</Nav.Link>
                                <Nav.Link href="#blogs">Blogs</Nav.Link>
                                <NavDropdown title="Category" id="collasible-nav-dropdown">
                                {
                                    arrCategory.map((category, i) => {
                                        return (
                                            <NavDropdown.Item href={"/e-commerce-template/" + category} key={i} >
                                                {category}
                                            </NavDropdown.Item>
                                        )
                                    })
                                }
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-light">Search</Button>
                                </Form>
                                <Nav.Link href="#Shopping"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                                <Nav.Link eventKey={2} href="#login">
                                    Login
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    };
}

export default NavBar;