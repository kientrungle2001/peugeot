import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PagePeugeotHome from './pages/Peugeot/Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact strict component={PagePeugeotHome} />
        </div>
      </Router>
    );
  }
}

export default App;
