import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { categoryList } from '../data';


const NavCategory = () =>{
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Nav className="d-flex justify-content-center flex-row" style={{ margin: "auto" }}>
                        {
                            categoryList.map((category, i) => {
                                return (
                                    <NavLink to={"/" + category} key={i}  className='nav-link' style={{ marginRight: "10px" }}>
                                       {category}
                                    </NavLink>
                                )
                            })
                        }
                    </Nav>
            </Navbar>
        </div>
    )
}

export default NavCategory;