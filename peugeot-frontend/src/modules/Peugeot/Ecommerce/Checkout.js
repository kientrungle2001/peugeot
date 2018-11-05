import React, { Component } from 'react';
import Axios from 'axios';
import { peugeot_api_url, peugeot_software, peugeot_site } from 'peugeot_constants';
import 'pages/Peugeot/Category/Category.css';
import './Checkout.css';
import peugeot_cart from 'cart';
import { Link } from 'react-router-dom';
import Recaptcha from 'react-recaptcha';
import { translate } from 'react-i18next';
import CarIcon from 'CarIcon';

class ModulePeugeotEcommerceCheckout extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.captchaVerified = false;
        this._ismounted = true;
        var that = this;
        that.state = that.state || {};
        if (!that.is_listened) {
            that.callback = function () {
                console.log('Checkout listen');
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

    handleSubmit(event) {
        const { t } = this.props;
        event.preventDefault();
        let formData = {
            fullName: this.refs.fullName.value,
            phone: this.refs.phone.value,
            address: this.refs.address.value,
            software_id: peugeot_software,
            site_id: peugeot_site,
            items: peugeot_cart.getItems()
        };
        var that = this;
        if(formData.items.length) {
            if(that.captchaVerified) {
                Axios.post(peugeot_api_url + '/ecommerce_checkout', formData).then(function(resp) {
                    alert(t('thanks_for_place_order'));
                    peugeot_cart.clear();
                    that.refs.fullName.value = '';
                    that.refs.phone.value = '';
                    that.refs.address.value = '';
                }).catch(function(err) {
                    console.log(err);
                });
            } else {
                alert(t('captcha_required'));
            }
            
        } else {
            alert(t('empty_cart_notify'));
        }
        
        return false;
    }

    verifyCaptcha(resp) {
        this.captchaVerified = true;
    }

    render() {
        const { t } = this.props;
        return (
            <div>
                <div className="container">
                    <h1 className="tit-category tit-product"><CarIcon /> {t('order_information')}!</h1>
                </div>

                <div className="container content-detail-cart">
                    <div className="row justify-content-md-center">
                        <div className="col-md-6">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input ref="fullName" name="fullName" type="text" className="form-control" placeholder={t('full_name_required')} />
                                </div>
                                <div className="form-group">
                                    <input ref="address" name="address" type="text" className="form-control" placeholder={t('address_required')} />
                                </div>
                                <div className="form-group">
                                    <input ref="phone" name="phone" type="text" className="form-control" placeholder={t('phone_required')} />
                                </div>
                                <div className="form-group text-center">
                                    <Recaptcha sitekey="6LeYonUUAAAAALyqdXWB2Rnu2aa8iZk0vNiW8A4u" verifyCallback={this.verifyCaptcha.bind(this)} />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Link to="/cart" title={t('back_to_cart')}> &lt; {t('back_to_cart')}</Link>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <button type="submit" className="btn site-button"><img src="/img/icon_search_peugeot.png" alt="icon-peugeot" className="icon-gui-thong-tin" /> {t('checkout_send')}</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default translate('translations')(ModulePeugeotEcommerceCheckout);