/* Initial state of store. */
const initialStoreState = {
    products: [
        {
            id: 1,
            name: "Babylon 5 DVD Box Set",
            rrp: 29.99,
            discountPerc: 15.0,
            discountVal: null,
            discountRule: null
        },
        {
            id: 2,
            name: "Boney M - Rivers of Babylon (Album)",
            rrp: 7.99,
            discountPerc: null,
            discountVal: null,
            discountRule: null
        },
        {
            id: 3,
            name: "Babylon - the boardgame",
            rrp: 14.99,
            discountPerc: null,
            discountVal: 2.00,
            discountRule: null
        },
        {
            id: 4,
            name: "Babylon Healthcare (Annual)",
            rrp: 50.00,
            discountPerc: null,
            discountVal: null,
            discountRule: null
        }
    ],
    basket: [],
    activeBasketRules: [
        {
            ruleInstance: 'RULE_1',
            prodRequired: [2,4],
            discountValue: 5.00
        }
    ]
};

export default initialStoreState;