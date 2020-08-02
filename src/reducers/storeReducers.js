
export const productsReducer = (state = [], action) => {
    switch(action.type){
        case 'GET_PRODUCTS':
            return action.payload;
        default:
            return state;
    }
}

export const setUserReducer = (state = null, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return action.payload;
        default:
            return state;
    }
}

export const addToCart = (state = null, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return action.payload;
        case 'FETCH_CART_ITEMS':
            return action.payload;
        case 'UPDATE_QUANTITY':
            return action.payload;
        default:
            return state;
    }
}
