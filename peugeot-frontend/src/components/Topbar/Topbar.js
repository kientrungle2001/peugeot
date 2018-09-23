import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Container,
    Row,
    Col
} from 'reactstrap';
import './Topbar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope);

class Topbar extends Component {

    render() {
        return (
            <section id="top-bar">
            <Container className="text-light">
                <Row>
                    <Col>
                        Báo giá số lượng lớn! Hình thức đặt hàng
                    </Col>
                    <Col className="text-right">
                        <Fa icon={['fas', 'envelope']} /> vhp-auto@gmail.com
                    </Col>
                </Row>
            </Container>
            </section>
        );
    }
}

export default Topbar;