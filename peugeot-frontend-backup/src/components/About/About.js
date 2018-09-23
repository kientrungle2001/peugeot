import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Container,
} from 'reactstrap';
import './About.css';

import Topbar from '../Topbar/Topbar.js';
import Menu from '../Menu/Menu.js';

class About extends Component {
    render() {
        return (
            <div>
                <div id="topSection">
                    <Topbar />
                    <hr className="mt-0 mb-0 bg-light" />
                    <Container>
                        <Menu />
                    </Container>
                </div>
            </div>
        );
    }
}

export default About;