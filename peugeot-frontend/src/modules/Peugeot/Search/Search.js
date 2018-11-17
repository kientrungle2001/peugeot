import React, { Component } from 'react';
import { tt } from 'peugeot_language';
import { translate } from 'react-i18next';
import queryString from 'query-string';

class ModulePeugeotSearch extends Component {
    componentWillMount() {
        const searchParams = queryString.parse(window.location.search);
        this.setState(searchParams);
    }
    render() {
        
        const { t } = this.props;
        
        return (
            <form className="form-inline carousel-frm container" method="get" action="/search">
                <div className="row">
                    <div className="form-group col-md-3">
                        <a href="/" className="btn btn-search cl-frm-search"><img src="/img/icon_search_peugeot.png" alt="search" style={{width:30, marginRight: 12}}/>{t('phutung_peugeot')}</a>
                    </div>
                    <div className="form-group col-md-3">
                        <input name="code" value={this.state && this.state.code} onChange={(evt) => { this.state.code = evt.target.value; this.setState(this.state); }} type="text" className="form-control" placeholder={t('ma_phutung')} />
                    </div>
                    <div className="form-group col-md-3">
                        <input name="name" value={this.state && this.state.name} onChange={(evt)=> { this.state.name = evt.target.value; this.setState(this.state); }} type="text" className="form-control" placeholder={t('ten_phutung')} />
                    </div>
                    <div className="form-group col-md-3">
                        <button type="submit" className="btn btn-search cl-frm-search">{t('search')}</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default translate('translations')(ModulePeugeotSearch);