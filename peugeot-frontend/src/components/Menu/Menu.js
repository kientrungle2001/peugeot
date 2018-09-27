import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';
import Axios from 'axios';
import './Menu.css';


class Menu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            items: []
        };
        Axios.get('http://api.phutungpeugeot.com/api/catalog_categories?_start=0&_end=100&type=menu&one=1&label=top-menu').then((resp)=> {
            console.log(resp.data);
            Axios.get('http://api.phutungpeugeot.com/api/catalog_categories?_start=0&_end=100&type=menu-item&parent_id=' + resp.data.id).then((childrenResp) => {
                console.log(childrenResp.data);
                this.state = window.jQuery.extend(this.state || {}, {
                    items: childrenResp.data
                });
                this.setState(this.state);
            });
        });
        /*
        this.prop= {
            items: [
                {
                    name: 'Trang chủ',
                    link: '/',
                    children: []
                },
                {
                    name: 'Giới thiệu',
                    link: '/about',
                    children: []
                },
                {
                    name: 'Sản phẩm',
                    link: '/category',
                    children: []
                },
                {
                    name: 'Quy định chính sách',
                    link: '/terms',
                    children: []
                },
                {
                    name: 'Tin tức',
                    link: '/news',
                    children: []
                },
                {
                    name: 'Liên hệ',
                    link: '/contact',
                    children: []
                },
            ]
        };
        */
    }
    toggle() {
        this.state.isOpen = !this.state.isOpen;
        this.setState(this.state);
    }
    render() {
        return (

            <Navbar color="light" light expand="md" className="navbar-trans navbar-inverse text-white" id="top-nav">
                <NavbarBrand href="/"><img src="/images/logo.png" className="logo-img" alt="img" /></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav id="main-menu" className="mr-auto w-100 text-uppercase" navbar>
                        {this.state.items.map((item, i)=>{
                            if (!item.children || item.children.length == 0) {
                                return (
                                    <NavItem key={i}>
                                        <Link to={item.link} className="nav-link">{item.title}</Link>
                                    </NavItem>

                                );
                            } else {
                                return (
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>Sản phẩm</DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem><Link to="/category">Sản phẩm</Link></DropdownItem>
                                            <DropdownItem>Sản phẩm 2</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Dịch vụ 1</DropdownItem>
                                            <DropdownItem>Dịch vụ 2</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>            
                                );
                            }
                        })}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Menu;