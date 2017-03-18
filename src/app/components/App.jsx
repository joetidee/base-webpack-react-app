import React, { Component, PropTypes } from 'react';
import Menu from '../components/shop/Menu.jsx';

const App = (props) => {
    return (
        <div>
            <header className="container-fluid">
                <Menu />
            </header>
            <div className="container-fluid">
                {React.cloneElement(props.children)}
            </div>
        </div>
    );
};

App.propTypes = {
};

export default App;