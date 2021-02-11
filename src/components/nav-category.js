import {
    Link
  } from "react-router-dom";
import { arrCategory } from './stock'
import { Navbar, Nav } from 'react-bootstrap';


function NavCategory() {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Nav className="d-flex justify-content-center flex-row" style={{ margin: "auto" }}>
                        {
                            arrCategory.map((category, i) => {
                                return (
                                    <Nav.Link href={"/" + category} key={i} style={{ marginRight: "10px" }}>
                                       {category}
                                    </Nav.Link>
                                )
                            })
                        }
                    </Nav>
            </Navbar>
        </div>
    )
}

export default NavCategory;