import React, { Component } from 'react';
import peugeot_cart from 'cart';
import {Link} from 'react-router-dom';
import { translate } from 'react-i18next';
import { tt } from 'peugeot_language';

class ModulePeugeotEcommerceMinicart extends Component {
    componentDidMount() {
        this._ismounted = true;
        var that = this;
        that.state = that.state || {};
        if(!that.is_listened) {
            console.log('MiniCart listen');
            that.callback = function () {
                that.state = {
                    cart_items: peugeot_cart.getItems()
                };
                if (that._ismounted)
                    that.setState(that.state);
            };
            peugeot_cart.listen(that.callback);
            that.is_listened = true;
            peugeot_cart.notify();
        }
    }
    componentWillUnmount() {
        this._ismounted = false;
        peugeot_cart.removeHandler(this.callback);
    }
    removeItem(index) {
        peugeot_cart.remove('cart_items', index);
    }
    closeModal() {
        window.jQuery('#exampleModalLong').modal('hide');
        window.jQuery('.modal-backdrop').remove();
    }
    render() {
        const { t } = this.props;
        return (
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" style={{ display: "none" }} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{t('your_product')}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="shopping-cart">
                                {this.state && this.state.cart_items && this.state.cart_items.map((item, key) => {
                                    return (
                                        <div className="product" key={key}>
                                            <div className="product-image">
                                                <img src={item.image} className="img-responsive" alt={tt(item.title)} />
                                            </div>
                                            <div className="product-details text-center">
                                                <h4>{tt(item.title)}</h4>
                                                <h4>{item.sku}</h4>
                                            </div>
                                            <div className="product-removal">
                                                <button className="remove-product" onClick={() => this.removeItem(key)}>
                                                    X
                  </button>
                                            </div>
                                        </div>
                                    );
                                })}

                                <div className="totals">
                                    <div className="totals-item">
                                        <label>{t('total')}</label>
                                        <div className="totals-value">{t('contact')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <Link to="/cart" onClick={this.closeModal}>
                            <button type="button" className="btn btn-success">{t('cart_detail')}</button>
                            </Link>
                            <Link to="/checkout" onClick={this.closeModal}>
                                <button type="button" className="btn site-button"><img src="/img/icon_search_peugeot.png" style={{ "width": "24px", "marginRight": "0.2rem" }} alt="Checkout" />{t('place_order')}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default translate('translations')(ModulePeugeotEcommerceMinicart);