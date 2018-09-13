import React, { Component } from 'react';
import { Container, Alert } from 'reactstrap';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <section id="header-main">
        <Container className="header">
          <Alert>Hello</Alert>
        </Container>
      </section>
    );
  }
}

export default App;
