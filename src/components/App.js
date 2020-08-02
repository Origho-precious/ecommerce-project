import React, { Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './App.module.css';
import Home from './Homepage';
import Collection from './Collection';
import Checkout from './Cart';
import Login from './Login';
import { auth, createUserDocument } from '../firebase/firebase';
import { setCurrentUser, fetchCartItems } from '../actions';

class App extends Component {

  unSubcribeFromAuth = null

  componentDidMount(){
    // Checking If User ia Authenticated
    this.unSubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          this.props.fetchCartItems(snapShot.id);
        })

      } else {
        this.props.setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount(){
    this.unSubcribeFromAuth()
  }

  render(){
    return (
      <div className={styles.App}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/collection" exact component={Collection}/>
            <Route path="/login" exact>
              {
                this.props.user ? <Redirect to="/collection"/> : <Login/>
              }
            </Route>
            <Route path="/collection/cart" exact component={Checkout}/>
          </Switch>
          <p className={styles.footer}>Richard's Store &copy; 2020. All right reserved.</p>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps, { setCurrentUser, fetchCartItems })(App);
