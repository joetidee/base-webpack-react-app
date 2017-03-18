import React, { Component } from 'react';
import BasketList from '../../components/shop/BasketList.jsx';

const BasketArea = (props) =>  {
    return (
        <div className="basketArea">
            <div className="pageTitleBlock">
                <h1 className="pageTitle">My Basket</h1>
            </div>
            <BasketList />
        </div>
    );
};

export default BasketArea;