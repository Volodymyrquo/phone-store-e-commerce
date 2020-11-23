import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Cart, Default, Details, Navbar, ProductList } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route component={Default} />
      </Switch>
    </>
  );
}

export default App;
