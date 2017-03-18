import React, { Component } from 'react';
import ProductList from '../../components/shop/ProductList.jsx';

const ProductsArea = (props) => {
    return (
        <div className="productsArea">
            <div className="pageTitleBlock">
                <h1 className="pageTitle">Products</h1>
                <p>Deal of the day! Purchase the Boney M - Rivers of Babylon (Album) + Babylon Healthcare (Annual) and get £5 deducted from your bill.</p>
            </div>
            <ProductList />
        </div>
    );
};

export default ProductsArea;