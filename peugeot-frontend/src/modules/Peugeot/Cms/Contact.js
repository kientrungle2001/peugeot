import React, { Component } from 'react';
import Axios from 'axios';
import { peugeot_api_url, peugeot_software, peugeot_site } from 'peugeot_constants';
import { translate } from 'react-i18next';
import Recaptcha from 'react-recaptcha';

class ModulePeugeotCmsContact extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.verifyCaptcha = this.verifyCaptcha.bind(this);
    }
    handleSubmit(event) {
        const { t } = this.props;
        event.preventDefault();
        let formData = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            subject: this.refs.subject.value,
            message: this.refs.message.value,
            software_id: peugeot_software,
            site_id: peugeot_site
        };
        var that = this;
        if (that.captchaVerified) {
            Axios.post(peugeot_api_url + '/catalog_addresses/contact', formData).then(function (resp) {
                alert(t('thanks_for_contact'));
                that.refs.name.value = '';
                that.refs.email.value = '';
                that.refs.subject.value = '';
                that.refs.subject.message = '';
            }).catch(function (err) {
                console.log(err);
            });
        } else {
            alert(t('captcha_required'));
        }
    }
    verifyCaptcha(resp) {
        this.captchaVerified = true;
    }
    componentDidMount() {
        // this.captchaVerified = false;
    }
    render() {
        const { t } = this.props;
        return (
            <div>
                <div className="container">
                    <h1>{t('contact')}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="wpb_wrapper">
                                    <div className="wpb_text_column wpb_content_element ">
                                        <div className="wpb_wrapper">                                            
                                            <p>{t('office')}: {t('office_address')}</p>
                                        </div>
                                    </div>
                                    <div className="vc_empty_space" style={{ height: '35px' }}><span className="vc_empty_space_inner"></span></div>

                                    <div className="wpb_text_column wpb_content_element ">
                                        <div className="wpb_wrapper">
                                            <h5>{t('phone')}:</h5>
                                            <p>Hotline: {t('hotline_number')}</p>
                                            <p>Tel: {t('tel_number')}</p>
                                        </div>
                                    </div>
                                    <div className="vc_empty_space" style={{ height: '35px' }}><span className="vc_empty_space_inner"></span></div>

                                    <div className="wpb_text_column wpb_content_element ">
                                        <div className="wpb_wrapper">
                                            <h5>E-mail</h5>
                                            <p>info@vhpgroup.vn</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>{t('full_name')}</label>
                                    <input ref="name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input ref="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>{t('subject')}</label>
                                    <input ref="subject" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-danger btn-block">{t('send')}</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>{t('message')}</label>
                                    <textarea ref="message" className="form-control" style={{ height: '140px' }} />
                                </div>
                                <div className="form-group">
                                    <label>Captcha</label>
                                    <Recaptcha sitekey="6LeYonUUAAAAALyqdXWB2Rnu2aa8iZk0vNiW8A4u" verifyCallback={this.verifyCaptcha} />
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6193331340273!2d105.85532261404003!3d21.007890993868347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf5e15467c7%3A0xb95d68b1ba482c52!2zOTIgUGjhu5EgTOG6oWMgTmdoaeG7h3AsIFRoYW5oIE5ow6BuLCBIYWkgQsOgIFRyxrBuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1542189460864" width="100%" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen title="map"></iframe>
            </div>
        );
    }
}
export default translate('translations')(ModulePeugeotCmsContact);