import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { tt } from 'peugeot_language';

class ModulePeugeotBreadcrumb extends Component {

    render() {
        const { t } = this.props;
        return (
            <div className="top-bar" style={{'marginBottom':'20px'}}>
                <div className="container">
                    <ul className="top-bar breadcrumb">
                        <li className="breadcrumb-item"><a href="/">{t('home')}</a></li>
                        <li className="breadcrumb-item active">{t('product')}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default translate('translations')(ModulePeugeotBreadcrumb);