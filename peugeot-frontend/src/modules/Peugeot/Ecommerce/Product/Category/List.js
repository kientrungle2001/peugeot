import React, { Component } from 'react';
import Axios from 'axios';
import {peugeot_api_url} from 'peugeot_constants';
import chunk from 'chunk';
import {Link} from 'react-router-dom';
import { translate } from 'react-i18next';
import ModulePeugeotEcommerceProductItem from '../Item';


class ModulePeugeotEcommerceProductCategoryList extends Component {
    componentWillMount() {
        var that = this;

        Axios.get(peugeot_api_url + '/ecommerce_products?_start='+((this.props.page - 1) * 16) +'&_end='+(this.props.page * 16)+'&attributes[auto_id]=' + this.props.categoryId).then(function (resp) {
            that.state = {
                items: resp.data,
                chunks: chunk(resp.data, 4),
                total_items: parseInt(resp.headers['x-total-count'], 10),
                total_pages: Math.ceil(parseInt(resp.headers['x-total-count'], 10) / 16),
                pages: []
            }

            for( var i = 0; i < that.state.total_pages; i++) {
                that.state.pages.push(i+1);
            }
            that.setState(that.state);
        });
    }
    render() {
        const { t } = this.props;
        return (
            <div>
                <div className="container list-products">
                    {this.state && this.state.chunks && this.state.chunks.map((chunk, key) => {
                        return (
                            <div className="row" key={key}>
                                {chunk.map((item, index) => {
                                    return (
                                        <ModulePeugeotEcommerceProductItem key={'product-item-'+key + '-' + index} item={item} index={index} />
                                    );
                                })}
                                
                            </div>
                        );
                    })}
                    
                </div>
                <nav aria-label="Page navigation phutungpeugeot.com">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" href="/" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        {this.state && this.state.pages.map(
                            (page, index) => {
                                return (
                                    <li className={"page-item " + (page === this.props.page ? 'active': '')} key={'product-page-'+index}>
                                        <Link className="page-link" to={'/category/product/' + this.props.categoryId + '/' + this.props.alias + '/' + page}>{page}</Link>
                                    </li>
                                );
                            }
                        )}
                        
                        
                        <li className="page-item">
                            <a className="page-link" href="/" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default translate('translations')(ModulePeugeotEcommerceProductCategoryList);