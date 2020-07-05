import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Home from './Homepage';
import Navbar from './Navbar';
import Collection from './Collection'
import Product from './Product';
import Checkout from './Cart';

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/collection" exact component={Collection}/>
          <Route path="/collection/product/:id" exact component={Product}/>
          <Route path="/collection/cart" exact component={Checkout}/>
        </Switch>
        <p className={styles.footer}>Richard's Store &copy; 2020. All right reserved.</p>
      </BrowserRouter>
    </div>
  );
}

export default App;
