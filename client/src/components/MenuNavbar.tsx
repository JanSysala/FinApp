import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import {Nav} from "react-bootstrap";
import '../styles/main.scss';

export const MenuNavbar: React.FC = () => {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Wealthino</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <Button href="/demo" className="btn-m10-right" variant="outline-primary">Demo</Button>
                    <Button className="btn-m10-right" variant="primary">Sign Up</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
