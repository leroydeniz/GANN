import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default class Menu extends React.Component {

    render() {
        return (

            <Navbar expand="lg" id="menu">
                {/* <Navbar.Brand href="/">Inicio</Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <NavDropdown title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/entrenamiento">Entrenamiento</NavDropdown.Item>
                            <NavDropdown.Item href="/test">Entrenar + Clasificar</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                        </NavDropdown>
                        <Nav.Link href="/autor">Autor y Memoria</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
