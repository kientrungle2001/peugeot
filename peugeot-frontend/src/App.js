import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PagePeugeotHome from './pages/Peugeot/Home/Home';
import PagePeugeotCmsPost from './pages/Peugeot/Cms/Post';
import PagePeugeotCategoryProduct from './pages/Peugeot/Category/Product';
import PagePeugeotEcommerceProduct from './pages/Peugeot/Ecommerce/Product';
import PagePeugeotCategoryNews from './pages/Peugeot/Category/News';
import { Provider } from 'react-redux';
import { store } from 'reducers/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
            <Route path="/" exact strict component={PagePeugeotHome} />
            <Route path="/about" exact strict component={props => <PagePeugeotCmsPost {...props} itemId={9} />} />
            <Route path="/posts/:type/:id/:alias" exact strict component={function (args) {
              return (
                <PagePeugeotCmsPost itemId={args.match.params.id} type={args.match.params.type} key={args.match.params.type + '-' + args.match.params.id}/>
              );
            }} />
            <Route path="/category/:type/:id/:alias" exact strict component={function (args) {
              if (args.match.params.type == 'news') {
                return (
                  <PagePeugeotCategoryNews categoryId={parseInt(args.match.params.id)} type={args.match.params.type} alias={args.match.params.alias} key={args.match.params.type + '-' + args.match.params.id} page={1} />
                );
              } else if (args.match.params.type == 'product') {
                return (
                  <PagePeugeotCategoryProduct categoryId={parseInt(args.match.params.id)} type={args.match.params.type} alias={args.match.params.alias} key={args.match.params.type + '-' + args.match.params.id} page={1} />
                );
              }
            }} />
              <Route path="/category/:type/:id/:alias/:page" exact strict component={function (args) {
                if (args.match.params.type == 'news') {
                  return (
                    <PagePeugeotCategoryNews categoryId={parseInt(args.match.params.id)} type={args.match.params.type} alias={args.match.params.alias} key={args.match.params.type + '-' + args.match.params.id} page={parseInt(args.match.params.page)} />
                  );
                } else if (args.match.params.type == 'product') {
                  return (
                    <PagePeugeotCategoryProduct categoryId={parseInt(args.match.params.id)} type={args.match.params.type} alias={args.match.params.alias} key={args.match.params.type + '-' + args.match.params.id} page={parseInt(args.match.params.page)} />
                  );
                }
              }} />
              <Route path="/product/:type/:categoryId/:categoryAlias/:id/:alias" exact strict component={function (args) {
                return (
                  <PagePeugeotEcommerceProduct 
                    productId={parseInt(args.match.params.id)} 
                    type={args.match.params.type} 
                    alias={args.match.params.alias} 
                    key={args.match.params.type + '-' + args.match.params.id} 
                    categoryId={parseInt(args.match.params.categoryId)}
                    categoryAlias={args.match.params.categoryAlias} />
                );
              }} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
