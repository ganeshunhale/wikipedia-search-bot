import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Outlet, Link, NavLink } from "react-router-dom"
function Navbarcomp(props) {

    const navStyle = ({ isActive }) => {

        return {
            fontWeight: isActive ? "bold" : "lighter"

        }

    }
    const NavLinkBrand = () => {

        return {
            fontWeight: "bold",
            color: "black",
            textDecoration: "none",
            fontSize: "large",
            // paddingTop: "10px",
            paddingRight: "10px",
            // color: var(black),




        }
    }

    return <>
        <Navbar  className="navbarclass"  >
            <Container >
                <div className="navbarclass">
                    <NavLink to="/" style={NavLinkBrand}>Ganesh</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="/">Home</Nav.Link> */}

                            {/* <Link to="/" className='NavLink'>Home</Link>

                        <Link to="/contact" className='NavLink'>contact</Link> */}





                            <NavLink to="/" className='NavLink' style={navStyle}>Home</NavLink>

                            <NavLink to="/contact" className='NavLink' style={navStyle}  >contact</NavLink>
                            <NavLink to="/cube" className='NavLink' style={navStyle}  >cube</NavLink>








                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item to="/contact">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>

                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
        <Outlet />

    </>;
}

export default Navbarcomp;
