import React, { Component } from 'react';
import Axios from 'axios';
import {peugeot_api_url} from 'peugeot_constants';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import { tt } from 'peugeot_language';


class ModulePeugeotEcommerceProductAuto extends Component {
    componentDidMount() {
        var that = this;
        Axios.get(peugeot_api_url+'/ecommerce_product_metadatas/find?refs[auto_id]=CatalogCategory&attributes[auto_id]='+this.props.productId).then(function(resp){
            that.state = {
                items: resp.data
            };
            that.setState(that.state);
        });
    }
    render() {
        const { t } = this.props;
        return (
            <table className="table table-hover">
                <tbody>
                    <tr className="bg-primary"><th>{t('thumbnail')}</th><th>{t('car_used')}</th><th>{t('year_built')}</th><th>{t('origin')}</th></tr>
                    {this.state && this.state.items.map(function(item, key){
                        return (
                            <tr key={key}><td className="max-width-140px"><img src={item.varchar_value.image} className="img-fluid" alt="Car user" /></td><td><Link to={"/category/product/"+item.id+"/"+item.alias}>{tt(item.title)}</Link></td><td>{tt(item.varchar_value.model)}</td><td><h6>{tt(item.varchar_value.origin)}</h6></td></tr>
                        );
                    })}
                    
                    
                    
                </tbody></table>
        );
    }
}

export default translate('translations')(ModulePeugeotEcommerceProductAuto);