import * as ATYPE from '../actionTypes/actionTypes.js';
import initialStoreState from '../store/initialStoreState.js';

/* State management of the Products. */
const productsReducer = (state = initialStoreState.products, action) => {
    let newState;
    switch (action.type) {
        default:
            return state;
    }
};

export default productsReducer;