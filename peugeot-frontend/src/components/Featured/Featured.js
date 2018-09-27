import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import {
    Row,
    Col
} from 'reactstrap';
import './Featured.css';
class Featured extends Component {
    constructor() {
        super();
        axios.get('http://api.phutungpeugeot.com/api/cms_posts',{}).then(function() {
        }).catch(function (err) { 
            console.log(err);
        }) ;
    }
    render() {
        return (
            <section id="featured-bar" className="mt-3">
                <Row className="row-pd-0 row-eq-height">
                    <Col className="relative">
                        <img src="/images/background_1.png" className="w-100" alt="bg" />
                        <img id="featured-logo" src="/images/Logo_text.png" className="absolute" alt="img" />
                    </Col>
                    <Col>
                        <img src="/images/auto1.png" className="w-100" alt="img" />
                        <div className="bg-white pl-3">
                            <p className="mt-1 mb-1">Phụ tùng</p>
                            <h4 className="mt-1 mb-1">Peugeot 5008</h4>
                        </div>
                    </Col>
                    <Col>
                        <img src="/images/auto2.png" className="w-100" alt="img" />
                        <div className="bg-white pl-3">
                            <p className="mt-1 mb-1">Phụ tùng</p>
                            <h4 className="mt-1 mb-1">Peugeot 5008</h4>
                        </div>
                    </Col>
                    <Col>
                        <img src="/images/auto3.png" className="w-100" alt="img" />
                        <div className="bg-white pl-3">
                            <p className="mt-1 mb-1">Phụ tùng</p>
                            <h4 className="mt-1 mb-1">Peugeot 5008</h4>
                        </div>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default Featured;