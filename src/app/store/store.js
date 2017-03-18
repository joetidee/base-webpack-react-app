import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from '../reducers/reducers.js';
import initialStoreState from './initialStoreState.js';
import thunk from 'redux-thunk';

// Enable redux dev tools in the browaer.
const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators or immutablejs support if needed
    }) : compose;

// Configure middleware.
const middleWareArray = [thunk];
const middleware = applyMiddleware(...middleWareArray);

// Init Redux store
let store = createStore(allReducers, initialStoreState, composeEnhancers(middleware));

export default store;