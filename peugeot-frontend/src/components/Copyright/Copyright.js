import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Row,
    Col
} from 'reactstrap';

class Copyright extends Component {

    render() {
        return (
            <Row>
                <Col>
                    Copyright 2018 - VHP Auto
                    </Col>
                <Col>
                </Col>
                <Col>
                </Col>
                <Col>
                    Giới thiệu | Liên hệ | Tuyển dụng
                </Col>
            </Row>
        );
    }
}

export default Copyright;