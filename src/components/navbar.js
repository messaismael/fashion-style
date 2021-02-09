import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';



class NavBar extends React.Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Fashion Style</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#shop">Shop</Nav.Link>
                            <Nav.Link href="#pages">Pages</Nav.Link>
                            <Nav.Link href="#blogs">Blogs</Nav.Link>
                            <NavDropdown title="Category" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#category/1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#category/2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#category/3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#category/4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-light">Search</Button>
                            </Form>
                            <Nav.Link href="#deets">Contact us</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    };
}

export default NavBar;