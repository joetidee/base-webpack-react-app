import { processBasketRules } from './basketRules.js';
import { calcProductDiscount, calcProductPrice } from './productCalc.js';


/*
* @param basketArray Array - Array of basket items.
* @param productArray Array - Array of products.
 */
export const getBasketProducts = function (basketArray = [], productArray = []){

    let basketProducts = basketArray.map((item) => {
        let prod = productArray.filter((prod) => {
            return ( prod.id == item.id );
        });
        prod[0].qty = item.qty;
        return prod[0];
    });

    return basketProducts;
};


/*
 * @param basketArray Array - Array of basket items.
 */
export const getNumBasketItems = function (basketArray = []){

    let total = 0;
    basketArray.forEach((item) => {
        total += item.qty;
    });
    return total;
};


/*
 * @param basketArray Array - Array of basket items.
 * @param productArray Array - Array of products.
 */
export const getBasketTotal = function(basketArray = [], productArray = [], rules = []) {

    let basketSubtotal = 0;
    let discountsTotal = 0;
    let basketFinalTotal = 0;
    if (basketArray.length > 0) {

        let itemSubtotals = basketArray.map((item) => {
            let productData = productArray.filter((prod) => {
                return (item.id == prod.id);
            });
            let discount = calcProductDiscount(productData[0].rrp, productData[0].discountPerc, productData[0].discountVal);
            let price = calcProductPrice(productData[0].rrp, discount);
            return (price * item.qty);
        });

        basketSubtotal = itemSubtotals.reduce((a, b) => a + b, 0);
        basketFinalTotal = processBasketRules(basketArray, basketSubtotal, rules);
        discountsTotal = (basketSubtotal - basketFinalTotal);
    }

    return {
        originalTotal: basketSubtotal,
        finalTotal: basketFinalTotal,
        discountsTotal: discountsTotal
    };
};


