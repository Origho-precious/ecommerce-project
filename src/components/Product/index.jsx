import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import styles from './product.module.css';
import iphone6 from '../../assets/products/iphone 6.png'
import iphone7 from '../../assets/products/iphone 7plus.png'
import iphone8 from '../../assets/products/iphone 8.png'
import iphoneX from '../../assets/products/iphone X.png'
import iphoneXr from '../../assets/products/iphone xr.png'
import iphoneXmax from '../../assets/products/iphone xmax.png'
import iphone11pro from '../../assets/products/iphone 11pro.png'
import iphone11promax from '../../assets/products/iphone 11promax.png'
import { fetchProduct, addToCart } from '../../actions';


const imgs = [iphone6, iphone7, iphone8, iphoneX, iphoneXr, iphoneXmax, iphone11pro, iphone11promax]

class Product extends Component{
    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.id);
    }

    addToCart = event => {
        this.props.addToCart(event.target.id);
        event.target.disabled = true;
    }

    numOfCartItems = () =>{
        if(this.props.cart){
            return this.props.cart.length
        }
    }


    showProduct = () => { 
        if(!this.props.product){
            return <h1>Loading...</h1>
        }

        return(
            <div className={styles.features}>
                <img src={imgs[this.props.product.id]} alt="icon"/>
                <div className={styles.text}>
                    <h3>{this.props.product.description}</h3>
                    <p>{this.props.product.discountPrice}</p>
                    <button onClick={this.addToCart} id={this.props.product.id} type="button">Add to Cart</button>
                </div>
            </div>
        )
    }

    render(){
        return(
            <>
                <Navbar cartNum={this.numOfCartItems()}/>
                <div className={styles.Product}>
                    { this.showProduct() }
                </div>
            </>
        )
    }
}

const mapStateToProps = state=> {
    return{
        product: state.product,
        cart: state.cart
    }
}

export default connect(mapStateToProps, { fetchProduct, addToCart })(Product);