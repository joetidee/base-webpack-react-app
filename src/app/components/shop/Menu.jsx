import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import BasketButton from './BasketButton.jsx';

class Menu extends Component {

    render() {
        return (
            <div className="row menu">
                <div className="col-xs-6" style={{paddingLeft:0}}>
                    <Link to="/" className="btn btn-default">Products</Link>
                </div>
                <div className="col-xs-6 text-right" style={{paddingRight:0}}>
                    <BasketButton />
                </div>
            </div>
        );
    }
}

Menu.propTypes = {
};

export default Menu;