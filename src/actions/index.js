import axios from '../apis';

export const fetchProducts = () => async (dispatch) => {
    const response = await axios.get('/products.json');
    
    dispatch({
        type: 'FETCH_PRODUCTS',
        payload: response.data
    })
}

export const fetchProduct = (id) => async (dispatch) => {
    const response = await axios.get(`/products/${id}.json`);
    
    dispatch({
        type: 'FETCH_PRODUCT',
        payload: response.data
    })
}

export const addToCart = (id) => async (dispatch) => {
    const response = await axios.get(`/products/${id}.json`);
    
    dispatch({
        type: 'ADD_TO_CART',
        payload: response.data
    })
}

