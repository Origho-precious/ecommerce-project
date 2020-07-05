import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import styles from './collections.module.css';
import iphone6 from '../../assets/products/iphone 6.png'
import iphone7 from '../../assets/products/iphone 7plus.png'
import iphone8 from '../../assets/products/iphone 8.png'
import iphoneX from '../../assets/products/iphone X.png'
import iphoneXr from '../../assets/products/iphone xr.png'
import iphoneXmas from '../../assets/products/iphone xmax.png'
import iphone11pro from '../../assets/products/iphone 11pro.png'
import iphone11promax from '../../assets/products/iphone 11promax.png'
import { fetchProducts, addToCart } from '../../actions';

const imgs = [iphone6, iphone7, iphone8, iphoneX, iphoneXr, iphoneXmas, iphone11pro, iphone11promax]


class Collection extends Component{
    componentDidMount(){
        this.props.fetchProducts();
    }

    addToCart = event => {
        this.props.addToCart(event.target.id);
        event.target.disabled = true;
    }

    renderProducts = () => {
        if(this.props.products){
            return this.props.products.map((product, id) => {
                return(
                    <div className={styles.iphone} key={id}>
                        <Link className={styles.link} to={`/collection/product/${id}`}>
                            <img src={imgs[id]} alt="icon"/>
                            <p className={styles.name}>{product.name}</p>
                            <p className={styles.price}>{product.discountPrice} <span>{product.originalPrice}</span></p>
                        </Link>
                        <button type="button" id={product.id} onClick={this.addToCart}>Add to Cart</button>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div className={styles.Collection}>
                <div className={styles.intro}>
                    <h1>Iphone Collection</h1>
                    <p>Discover the collection of fantastic phones from Richard's store, <br/> ranging from mid-range iphone6 to high end devices like iphone 11pro max.</p>
                </div>
                <div className={styles.grid}>
                   {this.renderProducts()}
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}

export default connect(mapStateToProps, { fetchProducts, addToCart })(Collection);