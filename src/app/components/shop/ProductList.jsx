import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem.jsx';


const mapStateToProps = function(state){
    return {
        products: state.products
    }
};


class ProductList extends Component {

    render(){
        let products = this.props.products.slice();
        let productList = [];
        if( products ) {
            productList = products.map((prod) => {
                return <ProductListItem
                    key={prod.id}
                    id={prod.id}
                    name={prod.name}
                    rrp={prod.rrp}
                    discountPerc={prod.discountPerc}
                    discountVal={prod.discountVal}
                    discountRule={prod.discountRule}
                />
            });
        }

        return (
            <div data-tagname="productsList">
                {productList}
            </div>
        );
    }
}

ProductList.propTypes = {
    basket: PropTypes.array,
    products: PropTypes.array
};

export default connect(mapStateToProps)(ProductList);