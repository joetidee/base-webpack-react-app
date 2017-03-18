import React from 'react';
import ReactDom from 'react-dom';
import routes from './routes.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
require('jquery');
import 'bootstrap/dist/js/bootstrap.min.js';

const renderApp = (appRoutes) => {
    ReactDom.render(appRoutes, document.getElementById('root'));
};
renderApp( routes() );

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => {
        renderApp(routes())
    });
}