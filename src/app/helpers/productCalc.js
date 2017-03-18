import roundDown from './roundDown.js';


/*
 * @param rrp Float - R.R.P.
 * @param discountPerc Number - The percentage discount (whole number).
 * @param discountVal Float - Discount as a money value (0.00).
 */
export const calcProductDiscount = function (rrp, discountPerc = null, discountVal = null){

    if(discountPerc){ // Percentage discount.
        return parseFloat(roundDown((rrp * (discountPerc/100)),2));
    }
    else if(discountVal){ // Value discount.
        return parseFloat(discountVal.toFixed(2));
    }
    else{
        return 0.00;
    }
};


/*
 * @param rrp Float - R.R.P.
 * @param discount Float - The discount money value (0.00).
 */
export const calcProductPrice = function (rrp, discount = 0){
    return parseFloat((rrp - discount).toFixed(2));
};