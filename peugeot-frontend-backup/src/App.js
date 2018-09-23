import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact strict component={Home} />
          <Route path="/about" exact strict component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
