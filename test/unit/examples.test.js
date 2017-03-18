import React from 'react';
import {mount, shallow} from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import chai, {expect} from 'chai';
chai.use(chaiEnzyme());
import sinon from 'sinon';
import { BasketListItem } from '../../../src/app/components/shop/BasketListItem.jsx';
import testStoreState from  '../testStoreState.js';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<BasketListItem />', () => {

    let wrapper;
    const store = mockStore(testStoreState);
    const prodObj1 = basketProducts[0];
    const prodObj2 = basketProducts[1];

    beforeEach('Mount <BasketListItem />', function () {
        wrapper = mount(<BasketListItem {...prodObj1} store={store} />);
    });

    describe('rendered basket item block', () => {

        it('has the correct id', () => {
            expect(wrapper.find('[data-prod-id=' + prodObj1.id + ']').exists()).to.be.true;
        });
        it('has the correct title', () => {
            expect(wrapper.find('.infoCell .title')).to.have.value(prodObj1.title);
        });
        it('has the correct r.r.p.', () => {
            let re = new RegExp("R\.R\.P\..*" + prodObj1.rrp);
            expect(wrapper.find('.infoCell .rrp').text()).match(re);
        });
        it('has the correct quantity', () => {
            expect(wrapper.find('input[data-id="qtyField"]')).to.have.value(prodObj1.qty + "");
        });
        it('has the correct discount', () => {
            let discount;
            discount = calcProductDiscount(prodObj1.rrp, null, null);
            expect(discount).to.equal(0);
            discount = calcProductDiscount(prodObj1.rrp, prodObj1.discountPerc, null);
            expect(discount).to.equal(3.89);
            discount = calcProductDiscount(prodObj2.rrp, null, prodObj2.discountVal);
            expect(discount).to.equal(2.49);
        });
        it('has the correct price', () => {
            let price;
            let discount;

            discount = calcProductDiscount(prodObj1.rrp, null, null);
            price = calcProductPrice(prodObj1.rrp,discount);
            expect(price).to.equal(prodObj1.rrp);

            discount = calcProductDiscount(prodObj1.rrp, prodObj1.discountPerc, null);
            price = calcProductPrice(prodObj1.rrp,discount);
            expect(price).to.equal(26.10);

            discount = calcProductDiscount(prodObj2.rrp, null, prodObj2.discountVal);
            price = calcProductPrice(prodObj2.rrp,discount);
            expect(price).to.equal(5.50);
        });
    });

    describe('removeFromBasket()', () => {

        it('should be fired when clicked', (done) => {
            const removeFromBasket = sinon.stub(BasketListItem.prototype, 'removeFromBasket').returns(true);
            wrapper.find('[data-id="removeButton"]').get(0).click();
            expect(removeFromBasket).to.have.been.called;
            removeFromBasket.restore();
            done();
        });
    });

    describe('updateBasket()', () => {

        it('should be fired when clicked', (done) => {
            const updateBasket = sinon.stub(BasketListItem.prototype, 'updateBasket').returns(true);
            wrapper.find('[data-id="updateButton"]').get(0).click();
            expect(updateBasket).to.have.been.called;
            updateBasket.restore();
            done();
        });
    });
});