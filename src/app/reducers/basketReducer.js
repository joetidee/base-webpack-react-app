import * as ATYPE from '../actionTypes/actionTypes.js';
import initialStoreState from '../store/initialStoreState.js';

const basketReducer = (state = initialStoreState.basket, action) => {
    let newState;
    let idFound = false;
    switch (action.type) {
        case ATYPE.ADD_TO_BASKET:
            newState = state.map((item,i) => {
                if(!idFound && item.id == action.payload.id){
                    item.qty += action.payload.qty;
                    idFound = true;
                }
                return item;
            });
            if(!idFound){
                newState = [...state, action.payload];
            }
            return newState;
        case ATYPE.UPDATE_BASKET:
            newState = state.map((item,i) => {
                if(!idFound && item.id == action.payload.id){
                    item.qty = action.payload.qty;
                    idFound = true;
                }
                return item;
            });
            return newState;
        case ATYPE.REMOVE_FROM_BASKET:
            newState = state.filter((item) => {
                return (item.id != action.payload.id);
            });
            return newState;
        default:
            return state;
    }
};

export default basketReducer;