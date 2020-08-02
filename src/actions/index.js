import { firestore } from '../firebase/firebase';

export const setCurrentUser = (user) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: user
    }
}

export const getProducts = (store) => {
    return {
        type: 'GET_PRODUCTS',
        payload: store.products
    }
}

export const addToCart = (userId, product) => async (dispatch) => {
    const ref = firestore.collection('users').doc(`${userId}`).collection('cart');

    const data = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.discountPrice,
        quantity: 1
    };

    const snapShot = await firestore.doc(`users/${userId}/cart/${data.id}`).get()

    if (!snapShot.exists) {
        
        ref.doc(`${data.id}`).set(data);
    
        let response = [];
    
        await firestore.collection(`users/${userId}/cart`).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    response.push(doc.data());
                });
            });

        dispatch({
            type: 'ADD_TO_CART',
            payload: response
        });
        
    } else {
        const updatedQuantity = snapShot.data().quantity;
        ref.doc(`${data.id}`).update({
            quantity: updatedQuantity + 1
        });

        let response = [];

        await firestore.collection(`users/${userId}/cart`).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    response.push(doc.data());
                });
            });

        dispatch({
            type: 'ADD_TO_CART',
            payload: response
        });
    }
}

export const increaseQuantity = (userId, product) => async (dispatch) => {
    const ref = firestore.collection('users').doc(`${userId}`).collection('cart');

    const data = {
        id: product.id,
        quantity: product.quantity
    };

    ref.doc(`${data.id}`).update({
        quantity: data.quantity + 1
    });

    let response = [];

    await firestore.collection(`users/${userId}/cart`).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                response.push(doc.data());
            });
        });

    dispatch({
        type: 'UPDATE_QUANTITY',
        payload: response
    });
}

export const decreaseQuantity = (userId, product) => async (dispatch) => {
    const ref = firestore.collection('users').doc(`${userId}`).collection('cart');

    const data = {
        id: product.id,
        quantity: product.quantity
    };

    if(data.quantity > 1) {
        ref.doc(`${data.id}`).update({
            quantity: data.quantity - 1
        });
    }

    let response = [];

    await firestore.collection(`users/${userId}/cart`).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                response.push(doc.data());
            });
        });

    dispatch({
        type: 'UPDATE_QUANTITY',
        payload: response
    });
}

export const fetchCartItems = (userId) => async (dispatch) => {
    await firestore.collection(`users/${userId}/cart`).get()
        .then(querySnapshot => {
            if (querySnapshot.docs.length) {
                let response = [];
        
                querySnapshot.forEach(doc => {
                    response.push(doc.data());
                });
        
                dispatch({
                    type: 'FETCH_CART_ITEMS',
                    payload: response
                });
            }
        });
}

export const deleteCartItem = (userId, itemId) => async (dispatch) => {
    await firestore.doc(`users/${userId}/cart/${itemId}`).delete()
    await firestore.collection(`users/${userId}/cart`).get()
        .then(querySnapshot => {
            let response = [];
    
            querySnapshot.forEach(doc => {
                response.push(doc.data());
            });
    
            dispatch({
                type: 'FETCH_CART_ITEMS',
                payload: response
            });
            
        });
}