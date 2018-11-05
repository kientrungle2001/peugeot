import React, { Component } from 'react';
import ModulePeugeotEcommerceProductRelatedCategory from './Related/Category';
import ModulePeugeotEcommerceProductRelatedViewed from './Related/Viewed';
import { translate } from 'react-i18next';
import CarIcon from 'CarIcon';
class ModulePeugeotEcommerceProductRelated extends Component {
    render() {
        const { t } = this.props;
        return (
            <div>
                <div className="container list-products">
                    <h3 className="tit-category tit-product"><CarIcon /> {t('same_category_products')}</h3>
                    <ModulePeugeotEcommerceProductRelatedCategory productId={this.props.productId} />
                    
                    <h3 className="tit-category tit-product"><CarIcon /> {t('viewed_products')}</h3>
                    <ModulePeugeotEcommerceProductRelatedViewed productIds={window.localStorage.getItem('productIds') || ''} />
                </div>
            </div>
        )
    }
}

export default translate('translations')(ModulePeugeotEcommerceProductRelated);