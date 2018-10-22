import React, { Component } from 'react';
import chunk from 'chunk';
import Axios from 'axios';
import { peugeot_api_url } from 'peugeot_constants';
import formatCurrency from 'format-currency';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import { tt } from 'peugeot_language';

class ModulePeugeotEcommerceProductRelatedViewed extends Component {
    componentDidMount() {
        var that = this;
        Axios.get(peugeot_api_url + '/ecommerce_products/vieweds?productIds=' + this.props.productIds).then(function (resp) {
            that.state = {
                items: resp.data,
                chunks: chunk(resp.data, 4)
            };

            that.setState(that.state);
        });
    }
    render() {
        const { t } = this.props;
        return (
            <div>
                {this.state && this.state.chunks.map(
                    (chunk, key) => {
                        return (
                            <div className="row" key={key}>
                                {chunk.map(
                                    (item, index) => {
                                        return (
                                            <div className={"col-md-3 col-6 text-center cate" + (index + 1)} key={index}>
                                                <img src={item.image} alt={tt(item.title)} className="img-responsive" />
                                                <div className="info-product">
                                                    <p className="line-img-product"></p>
                                                    <Link className="titleSP-product" to={"/product/" + item.type + "/" + item.id + "/" + item.alias}>{item.sku}<br />{tt(item.title)}</Link>
                                                </div>
                                                <p className="price">{t('price')}: {item.price ? formatCurrency(item.price) + (item.unit ? 'đ / ' + item.unit : '') : t('contact')}</p>
                                            </div>
                                        );
                                    }
                                )}

                            </div>
                        );
                    }
                )}

            </div>
        );
    }
}

export default translate('translations')(ModulePeugeotEcommerceProductRelatedViewed);
