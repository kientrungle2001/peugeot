import React, { Component } from 'react';
import ModulePeugeotEcommerceProductAuto from './Product/Auto';
import { FacebookProvider, Like, Comments } from 'react-facebook';

import './Product.css';
import Axios from 'axios';
import { peugeot_api_url } from 'peugeot_constants';
import formatCurrency from 'format-currency';
import peugeot_cart from 'cart';
import { translate } from 'react-i18next';
import { tt } from 'peugeot_language';
import CarIcon from 'CarIcon';
import { Helmet } from "react-helmet";

var jQuery = window.jQuery;
class ModulePeugeotEcommerceProduct extends Component {
    constructor(props) {
        super(props);
        this.selectImage = this.selectImage.bind(this);
    }
    componentDidMount() {
        var that = this;
        var productIds = window.localStorage.getItem('productIds') || '';
        if(productIds === '') {
            productIds = ',' + this.props.productId + ',';
        } else {
            if (productIds.indexOf(',' + this.props.productId + ',') === -1) {
                productIds += this.props.productId + ',';
            }
        }
        window.localStorage.setItem('productIds', productIds);
        Axios.get(peugeot_api_url + '/ecommerce_products/' + this.props.productId).then(function (resp) {
            that.state = jQuery.extend(that.state || {}, {
                item: resp.data
            });
            that.setState(that.state);
        });
        Axios.get(peugeot_api_url + '/ecommerce_product_metadatas/find?attributes[image]=' + this.props.productId).then(function (resp) {
            that.state = jQuery.extend(that.state || {}, {
                items: resp.data
            });
            that.setState(that.state);
        });
    }
    addToCart(item) {
        peugeot_cart.add({
            product_id: item.id,
            image: item.image,
            title: item.title,
            sku: item.sku,
            price: item.price,
            quantity: 1
        });
        //window.location.href="/cart";
    }
    selectImage(image) {
        this.state = jQuery.extend(this.state || {}, {
            selectedImage: image
        });
        this.setState(this.state);
    }
    render() {
        const { t } = this.props;
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{(this.state && this.state.item && tt(this.state.item.title) || '') + ` - Phụ tùng Peugeot`}</title>
                    <link rel="canonical" href="http://demo.phutungpeugeot.com" />
                </Helmet>
                <div className="container">
                    <h1 className="tit-category tit-product"><CarIcon /> {this.state && this.state.item && tt(this.state.item.title)} - {this.state && this.state.item && this.state.item.sku}</h1>
                </div>

                <div className="container content-detail-product">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="img-product">
                                <img src={this.state && (this.state.selectedImage || this.state.item && this.state.item.image)} alt={this.state && this.state.item && tt(this.state.item.title)} className="img-fluid" />
                                <div className="container">
                                    <div className="row">
                                        {this.state && this.state.items && this.state.items.map((item, index) => {
                                            return (
                                                <div className="col-3" key={'image-' + item.id + '-' + index}>
                                                    <img src={item.varchar_value} alt="product 1" className="img-fluid" onClick={() => {
                                                        this.selectImage(item.varchar_value);
                                                    }} />
                                                </div>
                                            );
                                        })}

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 tit-content-dt-product text-center">
                                        <h4 className="tit-dt-product">{this.state && this.state.item && this.state.item.title}</h4>
                                        <h4 className="ma-dt-product">{this.state && this.state.item && this.state.item.sku}</h4>
                                    </div>
                                    <div className="col-6 price-dt-prduct text-right">Giá: {this.state && this.state.item && (this.state.item.price ? formatCurrency(this.state.item.price) + (this.state.item.unit ? 'đ / ' + this.state.item.unit : '') : t('contact'))}</div>
                                    <div className="col-6 add-to-cart text-left"><button className="btn site-button" onClick={this.state && this.state.item && (() => this.addToCart(this.state.item))} data-toggle="modal" data-target="#exampleModalLong">{t('place_order')}</button></div>
                                </div>
                                <div className="des-add-to-cart">
                                    <ul>
                                        <li>{t('free_shipping')} &gt; 3,000,000 đ</li>
                                        <li>{t('not_include_vat')}</li>
                                        <li>{t('origin_gurantee')}</li>
                                    </ul>
                                    <h5>{t('sale_phone')}</h5>
                                    <a href="tel:+84985118368" title="Online 27/4">
                                        <img src="/img/hotline_banhang.png" alt="Điện thoại bán hàng online" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 main-ds-content-product">
                            <h2 className="tit-category tit-product">{this.state && this.state.item && this.state.item.title} - {this.state && this.state.item && this.state.item.sku}</h2>
                            <div className="m-tb20" dangerouslySetInnerHTML={{ __html: this.state && this.state.item && tt(this.state.item.content || '') }}></div>
                            <div className="row">
                                <div className="col-md-7 col-12">
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <td>{t('product_code')}</td>
                                                <th>{this.state && this.state.item && this.state.item.sku}</th>
                                            </tr>
                                            <tr>
                                                <td>{t('product_name')}</td>
                                                <td><h3>{this.state && this.state.item && tt(this.state.item.title)}</h3></td>
                                            </tr>
                                            <tr>
                                                <td>{t('product_branding')}</td>
                                                <td>{this.state && this.state.item && tt(this.state.item.branding)}</td>
                                            </tr>
                                            <tr>
                                                <td>{t('product_origin')}</td>
                                                <th>{this.state && this.state.item && tt(this.state.item.origin)}</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <FacebookProvider appId="180896868946666">
                                        <Like href={window.location.href} colorScheme="dark" showFaces share />
                                    </FacebookProvider>
                                    
                                </div>
                                <div className="col-md-5 col-12 text-center">
                                    <h5>{t('sale_phone')}</h5>
                                    <a href="tel:+84985118368" title="Online 27/4">
                                        <img src="/img/hotline_banhang.png" alt="Điện thoại bán hàng online" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="row comment-facebook">
                                <FacebookProvider appId="180896868946666">
                                    <Comments href={window.location.href} />
                                </FacebookProvider>
                                
                            </div>
                            <div className="row car-use">
                                <div className="col-12">
                                    <h3 className="tit-category tit-product"><CarIcon /> {this.state && this.state.item && tt(this.state.item.title)} - {this.state && this.state.item && this.state.item.sku}</h3>
                                    <ModulePeugeotEcommerceProductAuto productId={this.props.productId} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }
}

export default translate('translations')(ModulePeugeotEcommerceProduct);