import React, { Component } from 'react';
import axios from 'axios';
import { peugeot_api_url } from 'peugeot_constants';
import { Container, Row, Col } from 'reactstrap';
import { translate } from 'react-i18next';
import { tt } from 'peugeot_language';

class ModulePeugeotCmsContact extends Component {
    render() {
        const { t } = this.props;
        return (
            <div>
                <Container>
                    <h1>{t('contact')}</h1>
                    <form>
                        <Row>
                            <Col md={4}>
                                <div className="wpb_wrapper">
                                    <div className="wpb_text_column wpb_content_element ">
                                        <div className="wpb_wrapper">
                                            <p>Showroom: {t('showroom_address')}</p>
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
                            </Col>
                            <Col md={4}>
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
                                    <input ref="title" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-danger btn-block">{t('send')}</button>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="form-group">
                                    <label>{t('message')}</label>
                                    <textarea ref="content" className="form-control" style={{ height: '210px' }} />
                                </div>
                            </Col>
                        </Row>
                    </form>

                </Container>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.068424625695!2d105.85303531404043!3d21.02994799311568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abea811a73c9%3A0x513cd582e3278ff2!2zMjdkIFBo4buRIEzDvSBUaMOhaSBU4buVLCBMw70gVGjDoWkgVOG7lSwgSG_DoG4gS2nhur9tLCBIw6AgTuG7mWkgMTAwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1539858089325" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
            </div>
        );
    }
}
export default translate('translations')(ModulePeugeotCmsContact);