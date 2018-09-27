import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Row, Col
} from 'reactstrap';
class ContactForm extends Component {
    render() {
        return (
            <Row>
                <Col>
                    Left
                </Col>
                <Col>
                    Right
                </Col>
            </Row>
        );
    }
}

export default ContactForm;