import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Row,
    Col
} from 'reactstrap';
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope);

class PeugeotFooter extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        VHP Auto
                    </Col>
                    <Col>
                        Quy định - chính sách
                    </Col>
                    <Col>
                        Tin tức peugeot
                    </Col>
                    <Col>
                        Đăng ký nhận thông tin
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PeugeotFooter;