import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getNumBasketItems, getBasketTotal } from '../../helpers/basketCalc.js';


const mapStateToProps = function(state){return {
    basket: state.basket,
    products: state.products,
    activeBasketRules: state.activeBasketRules
}};


export class BasketButton extends Component {

    render() {
        let basket = this.props.basket.slice();
        let products = this.props.products.slice();
        let rules = (this.props.activeBasketRules) ? this.props.activeBasketRules.slice() : [];
        let numItems = getNumBasketItems(basket);
        let totalObj = getBasketTotal(basket, products, rules);
        let total = totalObj.finalTotal.toFixed(2);

        return (
            <Link to="/basket" className="btn btn-default">Basket<br />
                <span id="basketButtonNumItems">{numItems}</span>&nbsp;items&nbsp;&nbsp;|&nbsp;&nbsp;<span
                style={{fontWeight: 'bold'}}>&pound;<span id="basketButtonTotal">{total}</span></span></Link>
        );
    }
};

BasketButton.propTypes = {
    basket: PropTypes.array,
    products: PropTypes.array,
    activeBasketRules: PropTypes.array
};


export default connect(mapStateToProps)(BasketButton);