import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Row,
    Col,
    Media,
    Button,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone, faComments } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-regular-svg-icons';
library.add(faEnvelope, faMapMarker, faMap, faPhone, faComments);

class PeugeotFooter extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <img src="/images/logo.png" className="img-fluid" alt="img" />
                        <p className="text-justify">Thành lập từ năm 2006, trải qua 6 năm kinh nghiệm trong lĩnh vực phân phối các dòng xe ôtô nhập khẩu nguyên chiếc, phục vụ cho nhu cầu ngày càng lớn của khách hàng.</p>
                        <Media list top className="pl-0">
                            <Media tag="li">
                                <Media left href="#" className="m-3">
                                    <div className="footer-icon">
                                        <Fa icon={faMapMarker} size="2x" />
                                    </div>
                                </Media>
                                <Media body>
                                    Số 17, Ngõ 331 Trần Khát Chân, P. Thanh Nhàn, Q. Hai Bà Trưng, TP. Hà Nội
                            </Media>
                            </Media>
                            <Media tag="li">
                                <Media left href="#" className="m-3">
                                    <div className="footer-icon">
                                        <Fa icon={faPhone} size="2x" />
                                    </div>
                                </Media>
                                <Media body>
                                    Hotline: 0899-123456 (24/7 Support Line)
                            </Media>
                            </Media>
                        </Media>
                    </Col>
                    <Col className="footer-section">
                        <h2>Quy định - chính sách</h2>
                        <ul className="list-group sharp">
                            <li className="list-group-item bg-transparent border-bottom border-top-0 border-left-0 border-right-0 sharp">
                                <a> > Hình thức thanh toán</a>
                            </li>
                            <li className="list-group-item bg-transparent border-bottom border-top-0 border-left-0 border-right-0">
                                <a> > Vận chuyển giao nhận</a>
                            </li>
                            <li className="list-group-item bg-transparent border-bottom border-top-0 border-left-0 border-right-0">
                                <a> > Chính sách bảo hành</a>
                            </li>
                            <li className="list-group-item bg-transparent border-bottom border-top-0 border-left-0 border-right-0">
                                <a> > Quy định bảo mật thông tin</a>
                            </li>
                            <li className="list-group-item bg-transparent border-bottom border-top-0 border-left-0 border-right-0 sharp">
                                <a> > Chứng nhận kinh doanh</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="footer-section">
                        <h2>Tin tức peugeot</h2>
                        <Media list top className="pl-0 mt-3">
                            <Media tag="li" className="footer-news-item">
                                <Media left className="pr-3 pb-3">
                                    <Media object src="/images/footer_news_item.png" className="footer-news-img" alt="img" />
                                </Media>
                                <Media body>
                                    <Media heading>
                                        Time to change
                                </Media>
                                    <p>By admin / <Fa icon="comments" /> 28 comments</p>
                                </Media>
                            </Media>
                            <Media tag="li" className="footer-news-item">
                                <Media left className="pr-3 pb-3">
                                    <Media object src="/images/footer_news_item.png" className="footer-news-img" alt="img" />
                                </Media>
                                <Media body>
                                    <Media heading>
                                        Time to change
                                </Media>
                                    <p>By admin / <Fa icon="comments" /> 28 comments</p>
                                </Media>
                            </Media>
                            <Media tag="li" className="footer-news-item">
                                <Media left className="pr-3 pb-3">
                                    <Media object src="/images/footer_news_item.png" className="footer-news-img" alt="img" />
                                </Media>
                                <Media body>
                                    <Media heading>
                                        Time to change
                                </Media>
                                    <p>By admin / <Fa icon="comments" /> 28 comments</p>
                                </Media>
                            </Media>
                        </Media>
                    </Col>
                    <Col className="footer-section">
                        <h2>Đăng ký nhận thông tin</h2>
                        <p>Nếu bạn để lại email khi website cập nhật sản phẩm mới bạn sẽ nhận được thông báo ngay lập tức!</p>
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control bg-dark sharp border-0" placeholder="Email của bạn!" />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-danger btn-block sharp border-0">Đăng ký > </button>
                            </div>
                        </form>
                    </Col>
                </Row>

                <Row className="social-sharings">
                    <Col>
                        <InputGroup className="sharp">
                            <InputGroupAddon addonType="prepend">F</InputGroupAddon>
                            <Button placeholder="username" className="form-control">Share On Facebook</Button>
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="sharp">
                            <InputGroupAddon addonType="prepend">T</InputGroupAddon>
                            <Button placeholder="username" className="form-control">Twitter About It</Button>
                        </InputGroup>
                        
                    </Col>
                    <Col>
                        <InputGroup className="sharp">
                            <InputGroupAddon addonType="prepend">G</InputGroupAddon>
                            <Button placeholder="username" className="form-control">Google Plus | 78k</Button>
                        </InputGroup>
                        
                    </Col>
                    <Col>
                        <InputGroup className="sharp">
                            <InputGroupAddon addonType="prepend">L</InputGroupAddon>
                            <Button placeholder="username" className="form-control">Linked In | 21k</Button>
                        </InputGroup>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PeugeotFooter;