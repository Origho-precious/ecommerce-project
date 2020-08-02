import { combineReducers } from 'redux';
import { setUserReducer, productsReducer, addToCart } from './storeReducers';

export default combineReducers({
    user: setUserReducer,
    products: productsReducer,
    cart: addToCart,
});