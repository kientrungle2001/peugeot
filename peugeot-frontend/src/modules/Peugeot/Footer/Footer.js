import React, { Component } from 'react';
import ModulePeugeotFooterFloatbar from './Floatbar';
import { translate } from 'react-i18next';
import Axios from 'axios';
import { peugeot_api_url, peugeot_software, peugeot_site } from 'peugeot_constants';

class ModulePeugeotFooter extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        const { t } = this.props;
        event.preventDefault();
        let formData = {
            email: this.refs.email.value,
            software_id: peugeot_software,
            site_id: peugeot_site
        };
        var that = this;
        Axios.post(peugeot_api_url + '/catalog_addresses/subscribe', formData).then(function (resp) {
            alert(t('thanks_for_subscribe'));
            that.refs.email.value = '';
        }).catch(function (err) {
            console.log(err);
        });
    }
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
                                            <li><a href="">Chứng nhận kinh doanh</a></li>
                                            <li><a href="">Hình thức thanh toán</a></li>
                                            <li><a href="">Vận chuyển - Giao nhận</a></li>
                                            <li><a href="">Chích sách bảo hành</a></li>
                                            <li><a href="">Quy định bảo mật thông tin</a></li>
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
                                        <form className="dlab-subscribe-form" onSubmit={this.handleSubmit}>
                                            <div className="input-group m-b15">
                                                <input ref="email" name="dzEmail" required="" className="form-control " type="email" placeholder={t('enter_your_email')} />
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
                                        <a href="/"><i className="">f</i> Share On Facebook </a>
                                    </li>
                                    <li className="tw col-md-3 col-sm-6 col-xs-6 m-b30">
                                        <a href="/"><i className="">T</i> Tweet About it </a>
                                    </li>
                                    <li className="gplus col-md-3 col-sm-6 col-xs-6 m-b30">
                                        <a href="/"><i className="">G+</i> Google Plus | 78+ </a>
                                    </li>
                                    <li className="linkd col-md-3 col-sm-6 col-xs-6 m-b30">
                                        <a href="/"><i className="">L</i> Linkedin | 21k </a>
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