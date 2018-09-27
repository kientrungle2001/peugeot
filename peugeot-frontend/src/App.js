import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Category from './components/Category/Category.js';
import Contact from './components/Contact/Contact.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact strict component={Home} />
          <Route path="/about" exact strict component={About} />
          <Route path="/category" exact strict component={Category} />
          <Route path="/contact" exact strict component={Contact} />
        </div>
      </Router>
    );
  }
}


export default App;
