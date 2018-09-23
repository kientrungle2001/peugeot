import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (

            <Navbar color="light" light expand="md" className="navbar-trans navbar-inverse text-white" id="top-nav">
                <NavbarBrand href="/"><img src="/images/logo.png" className="logo-img" /></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav id="main-menu" className="mr-auto w-100 text-uppercase" navbar>
                        <NavItem>
                            <Link to="/" className="nav-link">Trang chủ</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" className="nav-link">Giới thiệu</Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>Sản phẩm</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Sản phẩm 1</DropdownItem>
                                <DropdownItem>Sản phẩm 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Dịch vụ 1</DropdownItem>
                                <DropdownItem>Dịch vụ 2</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Quy định - Chính sách</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Tin tức</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Liên hệ</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Menu;