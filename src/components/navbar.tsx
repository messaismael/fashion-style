import React, { useEffect, useState }from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { categoryList } from '../data';
import Logo from './logo';
import useWindowDimensions from '../utils/useWindowDimensions';



const  NavBar:React.FC = ()  => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);

    const { height, width } = useWindowDimensions();

    useEffect(() => {
      
        if(width <=768){
            setShowSearchBar(true);
        }
      
    })

    return (
        <div id="menu-bar">
            <Navbar collapseOnSelect expand="md" bg="dark"  variant="dark">
                <Container>
                    <Navbar.Brand className="nav-logo" href="/home">
                        <Logo/>
                        <span className='logo-label'> Fashion Style</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className='nav-collapse'>
                            <Button variant='outline-light' onClick={() => setShowSearchBar(!showSearchBar)}>
                                <FontAwesomeIcon  className="mr-1" icon={faSearch} />
                            </Button>
                            { showSearchBar &&  
                                <Nav className="mr-auto nav-form">
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search..." className=" shadow bg-white rounded mr-sm-2 search-form" />
                                    </Form>
                                </Nav>
                            }
                        <Nav className='nav-item'>
                            <Nav.Link href='/home' >Home</Nav.Link>
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
                            <Nav.Link href="/cart" ><FontAwesomeIcon  className="mr-1" icon={faShoppingCart} size="sm" /> cart[0] </Nav.Link>
                        </Nav>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;