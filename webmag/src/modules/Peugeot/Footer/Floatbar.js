import React, { Component } from 'react';
import ModulePeugeotEcommerceMinicart from 'modules/Peugeot/Ecommerce/Minicart';
import { translate } from 'react-i18next';
import { tt, getLanguage } from 'peugeot_language';


class ModulePeugeotFooterFloatbar extends Component {
    componentDidMount() {

    }
    render() {
        
        const { t, i18n} = this.props;
        const changeLanguage = (lng) => {
            window.localStorage.i18nextLng = lng;
            i18n.changeLanguage(lng);
        }
        

        return (
            <div>
                <div className="btn-fixed-right fixed-top">
                    <button className="mini-cart" data-toggle="modal" data-target="#exampleModalLong">
                        <img src="/img/icon_shopping_cart.png" className="img-responsive" alt="Giở hàng" />
                    </button>
                    <div className="hotline">
                        <a href="tel:+84977454568" title="Hotline">
                            <img src="/img/calll.gif" className="img-responsive" alt="Hotline" />
                        </a>
                    </div>
                    <div className="language-icon" data-toggle="modal" data-target="#language-modal">
                        <img src={getLanguage() === 'en' ? "/img/english-icon.png": "/img/vietnam-icon.png"} className="img-responsive" alt="Icon-Language" />
                    </div>

                </div>
                <ModulePeugeotEcommerceMinicart />
                <div className="modal fade" id="language-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{t('choose_language')}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">
                                <img onClick={() => { changeLanguage('vn'); }} src="/img/vietnam-icon.png" className="img-responsive" alt="Icon-Language" style={{width: '64px'}} data-dismiss="modal" />
                                &nbsp;
                                <img onClick={() => { changeLanguage('en'); }} src="/img/english-icon.png" className="img-responsive" alt="Icon-Language" style={{ width: '64px' }} data-dismiss="modal" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default translate('translations')(ModulePeugeotFooterFloatbar);