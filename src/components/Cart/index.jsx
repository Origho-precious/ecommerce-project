import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
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

const imgs = [iphone6, iphone7, iphone8, iphoneX, iphoneXr, iphoneXmas, iphone11pro, iphone11promax]

class Cart extends Component{
    rendercart(){
        return this.props.cart.map((product, id) => {
            return(
                <div className={styles.product} key={id}>
                    <div className={styles.div1}>
                        <img className={styles.itemImg} src={imgs[product.id]} alt="img"/>
                        <h3>{product.name}</h3>
                    </div>
                    <h3>{product.discountPrice}</h3>
                </div>
            )
        });
    }

    getTotalPrice(){
        if(this.props.cart.length > 0){
            const price = this.props.cart.map(item => {
                return item.discountPrice
            }).map(item => {
                return item.slice(1)
            }).map(item => {
                return Number(item)
            }).reduce((prev, cur) => {
                return prev + cur
            })

            return price;
        }
    }

    render(){
        if(this.props.cart.length === 0){
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
                    <h1>YOUR CART</h1>
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

const mapStateToProps = (state) => {
    return{
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);