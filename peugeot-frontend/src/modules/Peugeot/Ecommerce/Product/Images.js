import React, { Component } from 'react';
import Axios from 'axios';
import { peugeot_api_url } from 'peugeot_constants';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import { tt } from 'peugeot_language';


class ModulePeugeotEcommerceProductImages extends Component {
    componentDidMount() {
        var that = this;
        Axios.get(peugeot_api_url + '/ecommerce_product_metadatas/find?attributes[image]=' + this.props.productId).then(function (resp) {
            that.state = {
                items: resp.data
            };
            that.setState(that.state);
        });
    }
    render() {
        const { t } = this.props;
        return (
            <div className="container">
                <div className="row">
                {this.state && this.state.items.map( (item, index) => {
                    return (
                        <div className="col-3" key={'image-'+item.id+'-'+index}>
                            <img src={item.varchar_value} alt="product 1" className="img-fluid" />
                        </div>
                    );
                } )}
                    
                </div>
            </div>
        );
    }
}

export default translate('translations')(ModulePeugeotEcommerceProductImages);