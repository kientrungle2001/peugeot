import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PagePeugeotHome from './pages/Peugeot/Home/Home';
import PagePeugeotCmsPost from './pages/Peugeot/Cms/Post';
import PagePeugeotCmsContact from './pages/Peugeot/Cms/Contact';
import PagePeugeotCategoryProduct from './pages/Peugeot/Category/Product';
import PagePeugeotEcommerceProduct from './pages/Peugeot/Ecommerce/Product';
import PagePeugeotCategoryNews from './pages/Peugeot/Category/News';
import PagePeugeotEcommerceCart from './pages/Peugeot/Ecommerce/Cart';
import PagePeugeotEcommerceCheckout from './pages/Peugeot/Ecommerce/Checkout';
import PagePeugeotEcommerceSearch from './pages/Peugeot/Ecommerce/Search';
import ModulePeugeotCmsPage from './modules/Peugeot/Cms/Page';
import ScrollToTopRoute from './ScrollToTopRoute';
import { Provider } from 'react-redux';
import { store } from 'reducers/store';
import queryString from 'query-string';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact strict component={PagePeugeotHome} />
            <Route path="/contact" exact strict component={PagePeugeotCmsContact} />
            <Route path="/cart" exact strict component={PagePeugeotEcommerceCart} />
            <Route path="/checkout" exact strict component={PagePeugeotEcommerceCheckout} />
            <ScrollToTopRoute path="/search" exact strict component={function (args) {
              const values = queryString.parse(args.location.search);
              return (
                <PagePeugeotEcommerceSearch name={values.name} code={values.code} page={0} />
              );
            }} />
            <ScrollToTopRoute path="/search/:page" exact strict component={function (args) {
              const values = queryString.parse(args.location.search);
              return (
                <PagePeugeotEcommerceSearch name={values.name} code={values.code} page={parseInt(args.match.params.page, 10)} />
              );
            }} />
              <ScrollToTopRoute path="/about" exact strict component={props => <PagePeugeotCmsPost {...props} itemId={9} />} />
              <ScrollToTopRoute path="/posts/:type/:id/:alias" exact strict component={function (args) {
              return (
                <PagePeugeotCmsPost itemId={args.match.params.id} type={args.match.params.type} key={args.match.params.type + '-' + args.match.params.id}/>
              );
            }} />
              <ScrollToTopRoute path="/category/:type/:id/:alias" exact strict component={function (args) {
              if (args.match.params.type === 'news') {
                return (
                  <PagePeugeotCategoryNews categoryId={parseInt(args.match.params.id, 10)} type={args.match.params.type} alias={args.match.params.alias} key={args.match.params.type + '-' + args.match.params.id} page={1} />
                );
              } else if (args.match.params.type === 'product') {
                return (
                  <PagePeugeotCategoryProduct categoryId={parseInt(args.match.params.id, 10)} type={args.match.params.type} alias={args.match.params.alias} key={args.match.params.type + '-' + args.match.params.id} page={1} />
                );
              }
            }} />
              <ScrollToTopRoute path="/category/:type/:id/:alias/:page" exact strict component={function (args) {
                if (args.match.params.type === 'news') {
                  return (
                    <PagePeugeotCategoryNews categoryId={parseInt(args.match.params.id, 10)} type={args.match.params.type} alias={args.match.params.alias} key={args.match.params.type + '-' + args.match.params.id} page={parseInt(args.match.params.page, 10)} />
                  );
                } else if (args.match.params.type === 'product') {
                  return (
                    <PagePeugeotCategoryProduct categoryId={parseInt(args.match.params.id, 10)} type={args.match.params.type} alias={args.match.params.alias} key={args.match.params.type + '-' + args.match.params.id} page={parseInt(args.match.params.page, 10)} />
                  );
                }
              }} />
              <ScrollToTopRoute path="/product/:type/:categoryId/:categoryAlias/:id/:alias" exact strict component={function (args) {
                return (
                  <PagePeugeotEcommerceProduct 
                    productId={parseInt(args.match.params.id, 10)} 
                    type={args.match.params.type} 
                    alias={args.match.params.alias} 
                    key={args.match.params.type + '-' + args.match.params.id} 
                    categoryId={parseInt(args.match.params.categoryId, 10)}
                    categoryAlias={args.match.params.categoryAlias} />
                );
              }} />

            <ScrollToTopRoute path="/product/:type/:id/:alias" exact strict component={function (args) {
              return (
                <PagePeugeotEcommerceProduct
                  productId={parseInt(args.match.params.id, 10)}
                  type={args.match.params.type}
                  alias={args.match.params.alias}
                  key={args.match.params.type + '-' + args.match.params.id}
                   />
              );
            }} />

            <ScrollToTopRoute path="/page/:id/:alias" exact strict component={function (args) {
              return (
                <ModulePeugeotCmsPage type="page" itemId={args.match.params.id} key={'page-' + args.match.params.id} />
              );
            }} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
