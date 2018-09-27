import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Container
} from 'reactstrap';

import PeugeotFooter from '../Footer/Footer.js';
import Copyright from '../Copyright/Copyright.js';

class FooterSection extends Component {

    render() {
        return (
            <div>
                <section id="footer" className="mt-3 text-light pt-3 pb-3">
                    <footer>
                        <Container>
                            <PeugeotFooter />
                        </Container>
                    </footer>
                </section>
                <section id="copyright" className="p-3 text-light">
                    <Container>
                        <Copyright />
                    </Container>
                </section>
            </div>
        );
    }
}

export default FooterSection;