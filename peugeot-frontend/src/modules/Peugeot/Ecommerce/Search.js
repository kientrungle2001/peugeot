import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import { tt } from 'peugeot_language';
import './Product.css';
import Axios from 'axios';
import { peugeot_api_url } from 'peugeot_constants';
import formatCurrency from 'format-currency';
import chunk from 'chunk';

class ModulePeugeotEcommerceSearch extends Component {
    componentWillMount() {
        var that = this;
        var start = this.props.page * 16;
        var end = (this.props.page + 1) * 16 - 1;
        Axios.get(peugeot_api_url + '/ecommerce_products?_start='+start+'&_end='+end+'&name=' + encodeURIComponent(this.props.name) + '&code=' + encodeURIComponent(this.props.code)).then(function(resp) {
            that.state = {
                items: resp.data,
                chunks: chunk(resp.data, 4),
                total_items: parseInt(resp.headers['x-total-count'], 10),
                total_pages: Math.ceil(parseInt(resp.headers['x-total-count'], 10) / 16),
                pages: []
            }

            for (var i = 0; i < that.state.total_pages; i++) {
                that.state.pages.push(i + 1);
            }
            that.setState(that.state);
        });
    }
    render() {
        const {t} = this.props;
        return (
            <div>
                <div className="container">
                    <h1 className="tit-category tit-product"><svg className="svg-inline--fa fa-car fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path></svg> {t('search_result')}</h1>
                </div>

                <div className="container list-products">
                    {this.state && this.state.chunks && this.state.chunks.map((chunk, key) => {
                        return (
                            <div className="row" key={key}>
                                {chunk.map((item, index) => {
                                    return (
                                        <div className={"col-md-3 col-6 text-center cate" + (index + 1)} key={index}>
                                            <img src={item.image} alt={item.title} className="img-fluid" />
                                            <div className="info-product">
                                                <p className="line-img-product"></p>
                                                <Link className="titleSP-product" to={"/product/" + item.type  + "/" + item.id + "/" + item.alias}>{item.sku}<br />{tt(item.title)}</Link>
                                            </div>
                                            <p className="price">{t('price')}: {item.price ? formatCurrency(item.price) + (item.unit ? 'đ / ' + item.unit : '') : t('contact')}</p>
                                        </div>
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
                                    <li className={"page-item " + ((page-1) === this.props.page ? 'active' : '')} key={index}>
                                        <Link className="page-link" to={'/search/' + (page-1) + '?code=' + encodeURIComponent(this.props.code) + '&name=' + encodeURIComponent(this.props.name)}>{page}</Link>
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

export default translate('translations')(ModulePeugeotEcommerceSearch);