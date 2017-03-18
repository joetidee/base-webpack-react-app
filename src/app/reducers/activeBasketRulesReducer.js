import * as ATYPE from '../actionTypes/actionTypes.js';
import initialStoreState from '../store/initialStoreState.js';

/* State management of the Products. */
const activeBasketRulesReducer = (state = initialStoreState.activeBasketRules, action) => {
    let newState;
    switch (action.type) {
        default:
            return state;
    }
};

export default activeBasketRulesReducer;