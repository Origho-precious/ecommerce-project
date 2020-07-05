import { combineReducers } from 'redux';
import { productReducer, productsReducer, addToCart } from './storeReducers';

export default combineReducers({
    product: productReducer,
    products: productsReducer,
    cart: addToCart
})