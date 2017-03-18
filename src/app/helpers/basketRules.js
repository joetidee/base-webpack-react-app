/*
* @param basketItems Array - Array of basket items.
* @param basketTotal Number - Current basket total.
 */
export const processBasketRules = function(basketItems, basketTotal, rules = []){

    let adjustedBasketTotal = basketTotal;
    for( let r=0 ; r < rules.length ; r++ ){

        /*
        * RULE_1: If one or more products, in a list of accepted products, exists
        * in the basket then apply a discount to the total.
        */
        if(rules[r].ruleInstance == "RULE_1"){

            let prodRequired = rules[r].prodRequired; // Array of product id's.
            let discountValue = rules[r].discountValue; // Money value
            let foundBasketItems = basketItems.filter((item) => {
                return (prodRequired.indexOf(item.id) != -1);
            });

            if(foundBasketItems.length == prodRequired.length){
                adjustedBasketTotal = adjustedBasketTotal - discountValue;
            }
        }

        /* Additional rule handlers can be added here */

    }

    return adjustedBasketTotal;
};