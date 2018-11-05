import React, { Component } from 'react';
import ModulePeugeotHeaderInner from 'modules/Peugeot/Header/Inner';
import ModulePeugeotEcommerceCheckout from 'modules/Peugeot/Ecommerce/Checkout';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import 'pages/Peugeot/Category/Category.css';
import { Helmet } from "react-helmet";

class PagePeugeotEcommerceCheckout extends Component {

    render() {
        return (
            <div className="category">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Thanh toán - Phụ tùng Peugeot</title>
                    <link rel="canonical" href="http://demo.phutungpeugeot.com" />
                </Helmet>
                <ModulePeugeotHeaderInner />
                <main role="main">
                    <ModulePeugeotEcommerceCheckout />
                    <ModulePeugeotFooter />
                </main>
            </div>
        );
    }
}

export default PagePeugeotEcommerceCheckout;
