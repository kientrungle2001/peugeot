import React, { Component } from 'react';
import { tt } from 'peugeot_language';
import { translate } from 'react-i18next';
class ModulePeugeotTopbar extends Component {
    render() {
        const { t} = this.props;
        return (
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <a href="/">{t('more_pricing')}</a>
                            <a href="/">{t('order_method')}</a>
                        </div>
                        <div className="col-md-6 text-right">
                            <a href="/"><i className="fas fa-envelope"></i> vhp-auto@website.com</a>
                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                            <a href="/"><i className="fab fa-google-plus-g"></i></a>
                            <a href="/"><i className="fab fa-twitter"></i></a>
                            <a href="/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default translate('translations')(ModulePeugeotTopbar);