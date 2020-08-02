import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import styles from './cart.module.css';
import iphone6 from '../../assets/products/iphone 6.png'
import iphone7 from '../../assets/products/iphone 7plus.png'
import iphone8 from '../../assets/products/iphone 8.png'
import iphoneX from '../../assets/products/iphone X.png'
import iphoneXr from '../../assets/products/iphone xr.png'
import iphoneXmas from '../../assets/products/iphone xmax.png'
import iphone11pro from '../../assets/products/iphone 11pro.png'
import iphone11promax from '../../assets/products/iphone 11promax.png';
import {  deleteCartItem, increaseQuantity, decreaseQuantity } from '../../actions';
const imgs = [iphone6, iphone7, iphone8, iphoneX, iphoneXr, iphoneXmas, iphone11pro, iphone11promax]


class Cart extends Component{
    rendercart(){
        if (this.props.cart) {
            const {
              user,
              
              deleteCartItem,
              increaseQuantity,
              decreaseQuantity,
            } = this.props;
            return this.props.cart.map((product, id) => {
            return (
              <div className={styles.product} key={id}>
                <div className={styles.div1}>
                  <img
                    className={styles.itemImg}
                    src={imgs[product.id]}
                    alt="img"
                  />
                  <h3>{product.name}</h3>
                </div>
                <div className={styles.div2}>
                  <div className={styles.price}>
                    <span
                      onClick={() =>
                        decreaseQuantity(user.id, product)
                      }
                    >
                      &lt;
                    </span>
                    <h3>
                      {product.quantity}&nbsp; x &nbsp;$
                      {product.price.slice(1) * product.quantity}
                    </h3>
                    <span
                      onClick={() =>
                        increaseQuantity(user.id, product)
                      }
                    >
                      &gt;
                    </span>
                  </div>
                  <span
                    onClick={() => {
                      deleteCartItem(user.id, product.id);
                    }}
                    className={styles.delete}
                  >
                    <i className="fas fa-trash"></i>
                  </span>
                </div>
              </div>
            );
        });
        }
    }

    getTotalPrice(){
        if(this.props.cart.length > 0){
            const price = this.props.cart.map(item => {
                let x = item.price.slice(1)
                return Number(x) * item.quantity
            }).reduce((prev, cur) => {
                return prev + cur
            })

            return price;
        }
    }

    render(){
        if(!this.props.cart || this.props.cart.length === 0 ){
            return(
                <>
                    <Navbar/>
                    <div className={styles.empty}>
                        <h1>CART IS EMPTY...</h1>
                        <Link to="/collection" className={styles.link}>Want to add to cart? click me</Link>
                    </div>
                </>
            )
        }

        return(
            <>
                <Navbar/>
                <div className={styles.Cart}>
                    <h1 className={styles.title}>YOUR CART</h1>
                    <div className={styles.products}>
                        { this.rendercart() }
                    </div>
                    <div className={styles.summary}>
                        <div>
                            <h2>TOTAL:</h2>
                            <h2>${ this.getTotalPrice() }</h2>
                        </div>
                        <button type="button">CHECKOUT</button>
                    </div>
                </div>
            </>
        )

    }
}

const mapStateToProps = ({ user, cart }) => {
    return {
        user,
        cart
    }
}

export default connect(mapStateToProps, {
  
  deleteCartItem,
  increaseQuantity,
  decreaseQuantity,
})(Cart);