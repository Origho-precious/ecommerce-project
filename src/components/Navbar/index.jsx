import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import styles from './navbar.module.css';
import cartIcon from '../../assets/icons/shopping-cart.svg';
import userIcon from '../../assets/icons/user.svg';
import logoutIcon from '../../assets/icons/logout.svg';
import { auth, signInWithGoogle } from '../../firebase/firebase';

const Navbar = ({ user, cart }) => {
    const numOfCartItems = () => {
      if (cart) {
        return cart.length;
      }
    };

    return (
      <div className={styles.Nav}>
        <h3>
          Richard's <span>Store</span>
        </h3>
        <input type="checkbox" className={styles.checkbox} />
        <div className={styles.toggler}>
          <div></div>
        </div>
        <div className={styles.Navs}>
          <div className={styles.navLinks}>
            <Link to="/" className={styles.link}>
              <i className="fas fa-home"></i>&nbsp;<span>HOME</span>
            </Link>
            <Link to="/login" className={styles.link}>
              <i className="fas fa-table"></i>&nbsp;<span>COLLECTION</span>
            </Link>
          </div>
          <div className={styles.icons}>
            <Link to="/collection/cart" className={styles.link}>
              <span>{ numOfCartItems() > 0 ? numOfCartItems() : null }</span>
              <img src={cartIcon} alt="icon" className={styles.cart} />
              <h3>Cart</h3>
            </Link>
            { !user ? 
                (<div onClick={() => signInWithGoogle()} className={styles.link}>
                    <img src={userIcon} alt="icon" className={styles.user} />
                    <h3>Login</h3>
                </div>) : 
                (<div onClick={() => auth.signOut()} className={styles.link}>
                    <h3>LogOut</h3> &nbsp;&nbsp;
                    <img src={logoutIcon} alt="icon" className={styles.user} />
                </div> )
            }
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = ({user, cart}) => {
    return {
        user: user,
        cart: cart
    }
}

export default connect(mapStateToProps)(Navbar);