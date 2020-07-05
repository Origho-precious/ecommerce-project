import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './navbar.module.css';
import cart from '../../assets/icons/shopping-cart.svg';
import user from '../../assets/icons/user.svg';

const Navbar = () => {
    return(
        <div className={styles.Nav}>
            <h3>Richard's <span>Store</span></h3>
            <input type="checkbox" className={styles.checkbox}/>
            <div className={styles.toggler}>
                <div></div>
            </div>
            <div className={styles.Navs}>
                <div>
                    <Link to="/" className={styles.link}>HOME</Link>
                    <Link to="/collection" className={styles.link}>COLLECTION</Link>
                </div>
                <div className={styles.icons}>
                    <Link to="/collection/cart" className={styles.link}>
                        <img src={cart} alt="icon" className={styles.cart}/>
                        <h3>Cart</h3>
                    </Link>
                    <Link to="/" className={styles.link}>
                        <img src={user} alt="icon" className={styles.user} />
                        <h3>Login</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;