import React, { Component } from 'react';
import ModulePeugeotFooterFloatbar from './Floatbar';
import { translate } from 'react-i18next';

class ModulePeugeotFooter extends Component {
    render() {
        const { t } = this.props;
        return (
            <div>
                <footer className="site-footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-xs-6 footer-col-4">
                                    <div className="widget widget_about">
                                        <div className="logo-footer"><img src="/img/logo_footer.png" alt="Logo VHP Auto" /></div>
                                        <p className="m-tb20"><strong>VHP Auto</strong> {t('vhp_intro_text')}</p>

                                        <ul className="dlab-contact-info">
                                            <li><i className="flaticon-placeholder"></i>{t('vhp_address')}</li>
                                            <li><i className="flaticon-customer-service"></i>{t('vhp_phone')}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 footer-col-4">
                                    <div className="widget widget_services">
                                        <h4 className="m-b15 text-uppercase">{t('term_and_conditions')}</h4>
                                        <div className="dlab-separator"></div>
                                        <ul>
                                            <li><a href="new-car-latest.html">Latest Cars</a></li>
                                            <li><a href="new-car-upcoming.html">Upcoming Cars</a></li>
                                            <li><a href="used-car-search.html">Search Used Car</a></li>
                                            <li><a href="used-car-sell.html">Car Sell</a></li>
                                            <li><a href="compare-car.html">Compare Car</a></li>
                                            <li><a href="car-review.html">Car Review</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 footer-col-4">
                                    <div className="widget recent-posts-entry">
                                        <h4 className="m-b15 text-uppercase">{t('peugeot_news')} </h4>
                                        <div className="dlab-separator"></div>
                                        <div className="widget-post-bx">
                                            <div className="widget-post clearfix">
                                                <div className="dlab-post-media"> <img src="/img/pic1.jpg" alt="" width="200" height="143" /> </div>
                                                <div className="dlab-post-info">
                                                    <div className="dlab-post-header">
                                                        <h5><a href="blog-single.html">Time to change...</a></h5>
                                                    </div>
                                                    <div className="dlab-post-meta">
                                                        <ul>
                                                            <li className="post-author">By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments"></i> 28</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-post clearfix">
                                                <div className="dlab-post-media"> <img src="/img/pic2.jpg" alt="" width="200" height="160" /> </div>
                                                <div className="dlab-post-info">
                                                    <div className="dlab-post-header">
                                                        <h5><a href="blog-single.html">Time to change...</a></h5>
                                                    </div>
                                                    <div className="dlab-post-meta">
                                                        <ul>
                                                            <li className="post-author">By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments"></i> 28</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-post clearfix">
                                                <div className="dlab-post-media"> <img src="/img/pic3.jpg" alt="" width="200" height="160" /> </div>
                                                <div className="dlab-post-info">
                                                    <div className="dlab-post-header">
                                                        <h5><a href="blog-single.html">Time to change...</a></h5>
                                                    </div>
                                                    <div className="dlab-post-meta">
                                                        <ul>
                                                            <li className="post-author">By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments"></i> 28</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 footer-col-4">
                                    <div className="widget ">
                                        <h4 className="m-b15 text-uppercase">{t('newsletter_subscription')}</h4>
                                        <div className="dlab-separator"></div>
                                        <p className="m-tb20">{t('newsletter_message')}</p>
                                        <form className="dlab-subscribe-form">
                                            <div className="input-group m-b15">
                                                <input name="dzEmail" required="" className="form-control " type="email" placeholder={t('enter_your_email')} />
                                            </div>
                                            <div className="input-group">
                                                <button name="submit" type="submit" value="Submit" className="site-button btn-block">
                                                    {t('subscribe')} <i className="fa fa-angle-right font-18 m-l10"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix">
                                <ul className="full-social-icon clearfix">
                                    <li className="fb col-md-3 col-sm-6 col-xs-6 m-b30">
                                        <a href="/"><i className=""></i> Share On Facebook </a>
                                    </li>
                                    <li className="tw col-md-3 col-sm-6 col-xs-6 m-b30">
                                        <a href="/"><i className=""></i> Tweet About it </a>
                                    </li>
                                    <li className="gplus col-md-3 col-sm-6 col-xs-6 m-b30">
                                        <a href="/"><i className=""></i> Google Plus | 78+ </a>
                                    </li>
                                    <li className="linkd col-md-3 col-sm-6 col-xs-6 m-b30">
                                        <a href="/"><i className=""></i> Linkedin | 21k </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 text-left"> © Copyright 2018 - VHP Auto</div>
                                <div className="col-md-6 col-sm-6 text-right ">
                                    <a href="/"> {t('introduction')}</a> | <a href="/"> {t('contact')}</a> | <a href="/"> {t('recruitement')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <ModulePeugeotFooterFloatbar />
            </div>
        )
    }
}

export default translate('translations')(ModulePeugeotFooter);