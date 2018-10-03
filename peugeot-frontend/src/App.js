import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PagePeugeotHome from './pages/Peugeot/Home/Home';
import PagePeugeotCmsPost from './pages/Peugeot/Cms/Post';
import PagePeugeotCategoryProduct from './pages/Peugeot/Category/Product';
import PagePeugeotCategoryNews from './pages/Peugeot/Category/News';
import { Provider } from 'react-redux';
import { store } from 'reducers/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact strict component={PagePeugeotHome} />
            <Route path="/about" exact strict component={props => <PagePeugeotCmsPost {...props} itemId={9} />} />
            <Route path="/posts/:type/:id/:alias" exact strict component={function (args) {
              return (
                <PagePeugeotCmsPost itemId={args.match.params.id} type={args.match.params.type} />
              );
            }} />
            <Route path="/category/:type/:id/:alias" exact strict component={function (args) {
              if (args.match.params.type == 'news') {
                return (
                  <PagePeugeotCategoryNews categoryId={args.match.params.id} type={args.match.params.type} />
                );
              } else if (args.match.params.type == 'product') {
                return (
                  <PagePeugeotCategoryProduct categoryId={args.match.params.id} type={args.match.params.type} />
                );
              }
            }} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
