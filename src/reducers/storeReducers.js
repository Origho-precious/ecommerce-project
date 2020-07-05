
export const productsReducer = (state = null, action) => {
    switch(action.type){
        case 'FETCH_PRODUCTS':
            return action.payload;
        default:
            return state;
    }
}

export const productReducer = (state = null, action) => {
    switch(action.type){
        case 'FETCH_PRODUCT':
            return action.payload;
        default:
            return state;
    }
}

export const addToCart = (state = [], action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return [ ...state, action.payload ];
        default:
            return state;
    }
}
