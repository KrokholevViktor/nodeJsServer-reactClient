import React, { useContext } from "react";
import { Context } from "..";
import {Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Link to={SHOP_ROUTE}>Купи девайс</Link>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;