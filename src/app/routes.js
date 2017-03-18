import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store/store.js';
import { Provider } from 'react-redux';
import Error404 from './components/Error404.jsx';
import App from './components/App.jsx';
import ProductsArea from './components/shop/ProductsArea.jsx';
import BasketArea from './components/shop/BasketArea.jsx';

const routes = () => (

    <AppContainer>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={ProductsArea} />
                    <Route path="basket" component={BasketArea} />
                </Route>
                <Route path="*" component={Error404} />
            </Router>
        </Provider>
    </AppContainer>

);

export default routes;