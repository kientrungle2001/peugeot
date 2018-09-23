import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import PeugeotFooter from '../Footer/Footer.js';
import Copyright from '../Copyright/Copyright.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope);

class FooterSection extends Component {

    render() {
        return (
            <div>
                <section id="footer">
                    <footer>
                        <Container>
                            <PeugeotFooter />
                        </Container>
                    </footer>
                </section>
                <section id="copyright">
                    <Container>
                        <Copyright />
                    </Container>
                </section>
            </div>
        );
    }
}

export default FooterSection;