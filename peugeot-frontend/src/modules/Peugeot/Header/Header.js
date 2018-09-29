import React, { Component } from 'react';

class ModulePeugeotHeader extends Component {
    render() {
        return (
            <header>
                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <a href="#">Báo giá số lượng lớn!</a>
                                <a href="#">Hình thức đặt hàng!</a>
                            </div>
                            <div className="col-md-6 text-right">
                                <a href="#"><i className="fas fa-envelope"></i> vhp-auto@website.com</a>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-md navbar-dark bg-transparent">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src="/img/logo_small.png" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="mr-auto"></div>
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#" title="Home">Trang chủ <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" title="About">Giới thiệu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" title="Products">Sản phẩm</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" title="Privacy">Quy định - chính sách</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" title="News">Tin tức</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" title="Contact">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="myCarousel" className="carousel slide container" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active bg-transparent">
                            <div className="container text-center">
                                <a href="#">
                                    <img className="first-slide" src="/img/icon-slide.png" alt="First slide" />
                                </a>
                            </div>
                        </div>
                        <div className="carousel-item bg-transparent">
                            <div className="container text-center">
                                <a href="#">
                                    <img className="first-slide" src="/img/icon-slide.png" alt="First slide" />
                                </a>
                            </div>
                        </div>
                        <div className="carousel-item bg-transparent">
                            <div className="container text-center">
                                <a href="#">
                                    <img className="first-slide" src="/img/icon-slide.png" alt="First slide" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <form className="form-inline carousel-frm container">
                    <div className="row">
                        <div className="form-group col-md-3">
                            <a href="#" className="btn btn-search cl-frm-search"><img src="/img/icon_search_peugeot.png" />PHỤ TÙNG PEUGEOT</a>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" className="form-control" id="exampleInputEmail3" placeholder="MÃ PHỤ TÙNG" />
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" className="form-control" id="exampleInputEmail3" placeholder="TÊN PHỤ TÙNG" />
                        </div>
                        <div className="form-group col-md-3">
                            <button type="submit" className="btn btn-search cl-frm-search">Tìm kiếm</button>
                        </div>
                    </div>
                </form>
            </header>
        );
    }
}

export default ModulePeugeotHeader;