import React, { Component } from 'react';
import ModulePeugeotHeader from 'modules/Peugeot/Header/Header';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import ModulePeugeotAccessariesCarousel from 'modules/Peugeot/Accessaries/Carousel';
import { Helmet } from "react-helmet";

class PagePeugeotHome extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Trang chủ - Phụ tùng Peugeot</title>
                    <link rel="canonical" href="http://demo.phutungpeugeot.com" />
                </Helmet>
                <ModulePeugeotHeader />
                <main role="main">
                    <ModulePeugeotAccessariesCarousel />
                    <ModulePeugeotFooter />
                </main>
            </div>
        );
    }
}

export default PagePeugeotHome;
