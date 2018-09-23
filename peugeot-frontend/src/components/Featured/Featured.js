import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Container,
    Row,
    Col
} from 'reactstrap';
import './Featured.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope);

class Featured extends Component {

    render() {
        return (
            <section id="featured-bar" className="mt-3">
                <Row className="row-pd-0 row-eq-height">
                    <Col className="relative">
                        <img src="/images/background_1.png" className="w-100" />
                        <img id="featured-logo" src="/images/Logo_text.png" className="absolute" />
                    </Col>
                    <Col>
                        <img src="/images/auto1.png" className="w-100" />
                        <div className="bg-white pl-3">
                            <p className="mt-1 mb-1">Phụ tùng</p>
                            <h4 className="mt-1 mb-1">Peugeot 5008</h4>
                        </div>
                    </Col>
                    <Col>
                        <img src="/images/auto2.png" className="w-100" />
                        <div className="bg-white pl-3">
                            <p className="mt-1 mb-1">Phụ tùng</p>
                            <h4 className="mt-1 mb-1">Peugeot 5008</h4>
                        </div>
                    </Col>
                    <Col>
                        <img src="/images/auto3.png" className="w-100" />
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