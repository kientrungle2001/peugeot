import React, { Component } from 'react';
import ModulePeugeotHeaderInner from 'modules/Peugeot/Header/Inner';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import ModulePeugeotCmsContact from 'modules/Peugeot/Cms/Contact';
import 'pages/Peugeot/Category/Category.css';
import { Helmet } from "react-helmet";

class PagePeugeotCmsPost extends Component {

    render() {
        return (
            <div className="category">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Liên hệ - Phụ tùng Peugeot</title>
                    <link rel="canonical" href="http://phutungpeugeot.com" />
                </Helmet>
                <ModulePeugeotHeaderInner />
                <main role="main">
                    <ModulePeugeotCmsContact />
                    <ModulePeugeotFooter />
                </main>
            </div>
        );
    }
}

export default PagePeugeotCmsPost;
