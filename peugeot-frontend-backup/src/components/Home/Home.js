import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Container,
} from 'reactstrap';
import './Home.css';

import Topbar from '../Topbar/Topbar.js';
import Menu from '../Menu/Menu.js';
import Search from '../Search/Search.js';

class Home extends Component {
    render() {
        return (
            <div>
                <div id="bannerSection">
                    <Topbar />
                    <hr className="mt-0 mb-0 bg-light" />
                    <Container>
                        <Menu />
                        <Search />
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;