import React, { Component } from 'react';
import 'pages/Peugeot/Category/Category.css';
import peugeot_cart from 'cart';
import {Link} from 'react-router-dom';
import { translate } from 'react-i18next';
import formatCurrency from 'format-currency';
import { tt } from 'peugeot_language';
import CarIcon from 'CarIcon';

class ModulePeugeotEcommerceCart extends Component {
    componentDidMount() {
        this._ismounted = true;
        var that = this;
        that.state = that.state || {};
        if (!that.is_listened) {
            console.log('Cart listen')
            that.callback = function() {
                console.log('fired');
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
        console.log('remove ' + index);
        peugeot_cart.remove('cart_items', index);
    }
    updateQuantity(key, evt) {
        peugeot_cart.update(key, {
            quantity: parseInt(evt.target.value)
        });
    }
    render() {
        const { t } = this.props;
        return (
            <div>
                <div className="container">
                    <h1 className="tit-category tit-product"><CarIcon /> {t('cart')}</h1>
                </div>

                <div className="container content-detail-cart">
                    <div className="row">
                        <div className="clearfix"></div>
                        <div className="shopping-cart">
                            <div className="column-labels">
                                <label className="product-image">{t('image')}</label>
                                <label className="product-details">{t('product_name_code')}</label>
                                <label className="product-price">{t('price')}</label>
                                <label className="product-quantity">{t('quantity')}</label>
                                <label className="product-removal">{t('delete')}</label>
                                <label className="product-line-price">{t('total')}</label>
                            </div>
                            {this.state && this.state.cart_items && this.state.cart_items.map((item, key) => {
                                return (
                                    <div className="product" key={key}>
                                        <div className="product-image">
                                            <img src={item.image} className="img-fluid" alt={tt(item.title)} />
                                        </div>
                                        <div className="product-details text-center">
                                            <h4>{tt(item.title)}</h4>
                                            <h4>{item.sku}</h4>
                                        </div>
                                        <div className="product-price">{item && (item.price ? formatCurrency(item.price) + (item.unit ? 'đ / ' + item.unit : '') : t('contact'))}</div>
                                        <div className="product-quantity">
                                            <input type="number" value={item.quantity} min={1} onChange={(evt)=> this.updateQuantity(key, evt)} />
                                        </div>
                                        <div className="product-removal">
                                            <button className="remove-product" onClick={() => this.removeItem(key)}>{t('remove')}</button>
                                        </div>
                                        <div className="product-line-price">{item && (item.price ? formatCurrency(item.price * item.quantity) + (item.unit ? 'đ / ' + item.unit : '') : t('contact'))}</div>
                                    </div>
                                );
                            })}

                            <div className="totals">
                                <div className="totals-item">
                                    <label>{t('total_amount')}</label>
                                    <div className="totals-value">{t('contact')}</div>
                                </div>
                            </div>
                            <Link to="/category/product/1/san-pham"><button type="button" className="btn btn-success float-right">{t('add_more_product')}</button></Link>
                            <Link to="/checkout">
                                <button type="button" className="btn site-button float-right"><img src="/img/icon_search_peugeot.png" style={{ "width": "24px", "marginRight": "0.2rem" }} alt="Order" /> {t('place_order')}</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default translate('translations')(ModulePeugeotEcommerceCart);