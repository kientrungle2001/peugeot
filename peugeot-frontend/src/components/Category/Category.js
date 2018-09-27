import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Container,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
import './Category.css';

import Topbar from '../Topbar/Topbar';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import ProductList from '../ProductList/ProductList';
import FooterSection from '../FooterSection/FooterSection';

class Category extends Component {
    render() {
        return (
            <div>
                <div id="topSection">
                    <Topbar />
                    <hr className="mt-0 mb-0 bg-light" />
                    <Container>
                        <Menu />
                    </Container>
                    <Container>
                        <Breadcrumb>
                            <BreadcrumbItem><a href="#">Trang chủ</a></BreadcrumbItem>
                            <BreadcrumbItem active>Sản phẩm</BreadcrumbItem>
                        </Breadcrumb>
                    </Container>
                </div>
                
                <Container className="mt-3">
                    <Search />
                </Container>
                
                <section id="product-list" className="mt-3">
                    <Container>
                        <ProductList />
                    </Container>
                </section>
                <FooterSection />
            </div>
        );
    }
}

export default Category;