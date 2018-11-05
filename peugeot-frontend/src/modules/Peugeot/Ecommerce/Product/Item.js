import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import { tt } from 'peugeot_language';
import formatCurrency from 'format-currency';

class ModulePeugeotEcommerceProductItem extends Component {
    render() {
        const { t, item, index } = this.props;
        return (
            <div className={"col-md-3 col-6 text-center cate" + (index + 1)} key={index}>
                <img src={item.image} alt={item.title} className="img-fluid" />
                <div className="info-product">
                    <p className="line-img-product"></p>
                    <Link className="titleSP-product" to={"/product/" + item.type + "/" + item.id + "/" + item.alias}>{item.sku}<br />{tt(item.title)}</Link>
                </div>
                <p className="price">{t('price')}: {item.price ? formatCurrency(item.price) + (item.unit ? 'đ / ' + item.unit : '') : t('contact')}</p>
            </div>
        );
    }
}

export default translate('translations')(ModulePeugeotEcommerceProductItem);