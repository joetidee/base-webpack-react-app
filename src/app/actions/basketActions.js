import * as ATYPE from '../actionTypes/actionTypes.js';

export function addToBasket(id, qty) {
    let item = { id: id, qty: qty };
    return { type: ATYPE.ADD_TO_BASKET, payload: item }
}

export function updateBasket(id, qty) {
    let item = { id: id, qty: qty };
    return { type: ATYPE.UPDATE_BASKET, payload: item }
}

export function removeFromBasket(id) {
    let item = { id: id };
    return { type: ATYPE.REMOVE_FROM_BASKET, payload: item }
}