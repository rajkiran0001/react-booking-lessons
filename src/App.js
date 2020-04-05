import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Default from './components/Default';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Model from './components/Model'
import React, { Component } from 'react'


class App extends Component {
  render() {

    return (
      <React.Fragment>

        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route component={Default} />
        </Switch>
        <Model/>
      </React.Fragment> 
    )
  }
}

export default App

