import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BasketListItem from './BasketListItem.jsx';
import { getBasketProducts, getBasketTotal } from '../../helpers/basketCalc.js';


const mapStateToProps = function(state){
    return {
        products: state.products,
        basket: state.basket,
        activeBasketRules: state.activeBasketRules
    }
};


export class BasketList extends Component {

    render(){
        let basket = this.props.basket.slice();
        let products = this.props.products.slice();
        let rules = (this.props.activeBasketRules) ? this.props.activeBasketRules.slice() : [];
        let basketList = getBasketProducts(basket, products);
        if( basketList.length > 0 ) {
            basketList = basketList.map((prod) => {
                return <BasketListItem
                    key={prod.id}
                    id={prod.id}
                    qty={prod.qty}
                    name={prod.name}
                    rrp={prod.rrp}
                    discountPerc={prod.discountPerc}
                    discountVal={prod.discountVal}
                    discountRule={prod.discountRule}
                />
            });
        }
        else{
            basketList = <div className="noBasketItems">Your basket is empty</div>;
        }

        let totalObj = getBasketTotal(basket, products, rules);
        let total = totalObj.finalTotal;

        let discountsBlock = null;
        let discounts = totalObj.discountsTotal;
        if(discounts > 0){discountsBlock = <div className="basketListDiscountTotal"><span>Additional Discounts: £{discounts.toFixed(2)}</span></div>;}

        let origTotalBlock = null;
        let origTotal = totalObj.originalTotal;
        if(discounts > 0){origTotalBlock = <div className="basketListOriginalTotal"><span>Original Total: £{origTotal.toFixed(2)}</span></div>;}

        return (
            <div className="basketList">
                {basketList}
                <div style={{textAlign:"center",paddingTop:"20px"}}>
                    {origTotalBlock}
                    {discountsBlock}
                    <div className="basketListTotal">
                        <span>Basket Total: </span>
                        <span style={{fontWeight:"bold"}}>£{total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        );
    }
}

BasketList.propTypes = {
    basket: PropTypes.array,
    products: PropTypes.array,
    activeBasketRules: PropTypes.array
};

export default connect(mapStateToProps)(BasketList);