import React, { Component } from 'react';
import { Container, Alert } from 'reactstrap';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <section id="header-main">
        <Container className="header">
          <Hello />
          <Alert>Hello</Alert>

        </Container>
      </section>
    );
  }
}

class Hello extends Component {
  render() {
    return (
      <h1>Header</h1>
    );
  }
}

export default App;
