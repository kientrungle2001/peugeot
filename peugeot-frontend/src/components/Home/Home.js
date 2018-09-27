import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Container
} from 'reactstrap';
import './Home.css';

import Topbar from '../Topbar/Topbar.js';
import Menu from '../Menu/Menu.js';
import Search from '../Search/Search.js';
import Featured from '../Featured/Featured.js';
import FooterSection from '../FooterSection/FooterSection.js';

class Home extends Component {
    render() {
        return (
            <div>
                <div id="bannerSection">
                    <Topbar />
                    <hr className="mt-0 mb-0 bg-light" />
                    <section id="menu-bar">
                        <Container>
                            <Menu />
                        </Container>
                    </section>
                    <section id="bottom-bar">
                        <Container>
                            <Search />
                            <Featured />
                        </Container>
                    </section>
                    
                </div>
                <FooterSection />
            </div>
        );
    }
}

export default Home;