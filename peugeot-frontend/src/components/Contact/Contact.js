import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Container
} from 'reactstrap';
import './Contact.css';

import Topbar from '../Topbar/Topbar.js';
import Menu from '../Menu/Menu.js';
import Search from '../Search/Search.js';
import FooterSection from '../FooterSection/FooterSection.js';
import ContactForm from '../ContactForm/ContactForm.js';

class Contact extends Component {
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
                <Container className="mt-3">
                    <Search />
                </Container>
                <section id="contact-section" className="mt-3">
                    <Container>
                        <ContactForm />
                    </Container>
                </section>
                <FooterSection />
            </div>
        );
    }
}

export default Contact;