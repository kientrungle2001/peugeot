import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Row,
    Col
} from 'reactstrap';

import './ProductList.css';

import ProductItem from '../ProductItem/ProductItem';

class ProductList extends Component {

    render() {
        return (

            <Row>
                <Col lg="3" md="4" sm="6">
                    <ProductItem />
                </Col>
                <Col lg="3" md="4" sm="6">
                    <ProductItem />
                </Col>
                <Col lg="3" md="4" sm="6">
                    <ProductItem />
                </Col>
                <Col lg="3" md="4" sm="6">
                    <ProductItem />
                </Col>
                <Col lg="3" md="4" sm="6">
                    <ProductItem />
                </Col>
                <Col lg="3" md="4" sm="6">
                    <ProductItem />
                </Col>
                <Col lg="3" md="4" sm="6">
                    <ProductItem />
                </Col>
                <Col lg="3" md="4" sm="6">
                    <ProductItem />
                </Col>
                <Col lg="3" md="4" sm="6">
                    <ProductItem />
                </Col>
                <Col lg="3" md="4" sm="6">
                    <ProductItem />
                </Col>
            </Row>
        );
    }
}

export default ProductList;