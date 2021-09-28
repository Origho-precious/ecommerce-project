import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./collections.module.css";
import Navbar from "../Navbar";
import { getProducts, addToCart } from "../../actions";
import STORE_DATA from "../../data/data";

class Collection extends Component {
	componentDidMount() {
		this.props.getProducts(STORE_DATA);
	}

	addToCart = (id) => {
		const product = this.props.products[id];
		if (this.props.user) {
			const userId = this.props.user.id;
			this.props.addToCart(userId, product);
		}
	};

	renderProducts = () => {
		if (this.props.products) {
			return this.props.products.map((product) => {
				return (
					<div className={styles.iphone} key={product.id}>
						<div className={styles.link}>
							<img src={product.image} alt="icon" />
							<p className={styles.name}>{product.name}</p>
							<p className={styles.price}>
								{product.discountPrice} <span>{product.originalPrice}</span>
							</p>
						</div>
						<button type="button" onClick={() => this.addToCart(product.id)}>
							Add to Cart
						</button>
					</div>
				);
			});
		}
	};

	render() {
		return (
			<>
				<Navbar />
				<div className={styles.Collection}>
					<div className={styles.intro}>
						<h1>Iphone Collection</h1>
						<p>
							Discover the collection of fantastic phones from Richard's store,{" "}
							<br /> ranging from mid-range iphone6 to high end devices like
							iphone 11pro max.
						</p>
					</div>
					<div className={styles.grid}>{this.renderProducts()}</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = ({ user, products }) => {
	return {
		user,
		products,
	};
};

export default connect(mapStateToProps, { getProducts, addToCart })(Collection);
