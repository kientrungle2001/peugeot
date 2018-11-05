import React, { Component } from 'react';
import ModulePeugeotHeaderInner from 'modules/Peugeot/Header/Inner';
import ModulePeugeotEcommerceCart from 'modules/Peugeot/Ecommerce/Cart';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import 'pages/Peugeot/Category/Category.css';
import { Helmet } from "react-helmet";
class PagePeugeotEcommerceCart extends Component {

    render() {
        return (
            <div className="category">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Giỏ hàng - Phụ tùng Peugeot</title>
                    <link rel="canonical" href="http://demo.phutungpeugeot.com" />
                </Helmet>
                <ModulePeugeotHeaderInner />
                <main role="main">
                    <ModulePeugeotEcommerceCart />
                    <ModulePeugeotFooter />
                </main>
            </div>
        );
    }
}

export default PagePeugeotEcommerceCart;
