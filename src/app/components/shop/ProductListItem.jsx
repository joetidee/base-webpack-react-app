import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { calcProductDiscount, calcProductPrice } from '../../helpers/productCalc.js';
import { addToBasket } from '../../actions/basketActions.js';


const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        addToBasket
    }, dispatch)
};


export class ProductListItem extends Component {

    constructor(props){
        super(props);
        this.id = this.props.id;
        this.state = {
            qty: '1'
        };
    }

    addToBasket(e){
		if(this.state.qty != ''){
			this.props.addToBasket(this.id, parseInt(this.state.qty));
		}
    }

    updateQty(e){
        this.setState({qty: e.target.value});
    }

    render(){

        let name = this.props.name;
        let rrp = this.props.rrp;
        const imgPath = 'public/assets/img/';
        let imgSrc = imgPath + this.id + ".jpg";
        let savingMsg = (<span>R.R.P. &pound;{rrp}</span>);
        let discount = calcProductDiscount(rrp, this.props.discountPerc, this.props.discountVal);
        if(discount > 0) {
            savingMsg = (<span>R.R.P.&nbsp;<span className="strike rrpText">&pound;{rrp}</span>&nbsp;&nbsp;|&nbsp; <span className='savings'>You&nbsp;Save:&nbsp;£{discount.toFixed(2)}</span></span>);
        }
        let price = calcProductPrice(rrp, discount);

        return (
            <div className="productsListItem" data-prod-id={this.id}>
                <div className="row">
                    <div className="imgCell col-xs-12 col-sm-3 col-md-2">
                        <img src={imgSrc} />
                    </div>
                    <div className="infoCell col-xs-12 col-sm-6 col-md-7">
                        <div className="title">{name}</div>
                        <div className="rrp">{savingMsg}</div>
                        <div className="price">&pound;{price.toFixed(2)}</div>
                    </div>
                    <div className="qtyCell col-xs-12 col-sm-3 col-md-3">
                        <div style={{textAlign:"center",width:"120px",float:"right"}}>
                            <div className="qtyLabel">Quantity</div>
                            <div className="qty"><input type="text" onChange={this.updateQty.bind(this)} value={this.state.qty} data-id="qtyField" className="form-control" maxLength="2" /></div>
                            <div className="add"><button type="button" data-id="addButton" className="btn btn-primary" onClick={this.addToBasket.bind(this)}>Add to Basket</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProductListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    rrp: PropTypes.number,
    discountPerc: PropTypes.number,
    discountVal: PropTypes.number
};

export default connect(null, mapDispatchToProps)(ProductListItem);