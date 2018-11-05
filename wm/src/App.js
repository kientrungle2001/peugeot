import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import './style.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/topics" component={Detail} />
    </div>
  </Router>
);

const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
);

const Detail = () => (
  <div>
    <h2>Detail</h2>
  </div>
);

export default App;