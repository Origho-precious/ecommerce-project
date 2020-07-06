import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './navbar.module.css';
import cart from '../../assets/icons/shopping-cart.svg';
import user from '../../assets/icons/user.svg';

const Navbar = (props) => {
    return(
        <div className={styles.Nav}>
            <h3>Richard's <span>Store</span></h3>
            <input type="checkbox" className={styles.checkbox}/>
            <div className={styles.toggler}>
                <div></div>
            </div>
            <div className={styles.Navs}>
                <div className={styles.navLinks}>
                    <Link to="/" className={styles.link}><i className="fas fa-home"></i>&nbsp;<span>HOME</span></Link>
                    <Link to="/collection" className={styles.link}><i className="fas fa-table"></i>&nbsp;<span>COLLECTION</span></Link>
                </div>
                <div className={styles.icons}>
                    <Link to="/collection/cart" className={styles.link}>
                        <span>{props.cartNum}</span>
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