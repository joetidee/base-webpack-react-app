import { combineReducers } from 'redux';
import basketReducer from './basketReducer.js';
import productsReducer from './productsReducer.js';
import activeBasketRulesReducer from './activeBasketRulesReducer.js';

const allReducers = combineReducers({
    basket: basketReducer,
    products: productsReducer,
    activeBasketRules: activeBasketRulesReducer
});

export default allReducers;