import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class NavbarComponent extends React.Component {
    render() {
        return (
            <Navbar bg="light" >
                <Navbar.Brand>MyShop</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavDropdown title="Home" id="home-dropdown">
                        <NavDropdown title="Global Navigation" id="home-global-navigation-dropdown">
                            <NavDropdown.Item ><Link to='/gn/order-details'>Order Status Panel</Link></NavDropdown.Item>
                        </NavDropdown>
                    </NavDropdown>
                    <NavDropdown title="Email" id="email-dropdown">
                        <NavDropdown.Item ><Link to=''>Order Detail Page</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}