import React, { Component } from 'react';
import ModulePeugeotHeaderInner from 'modules/Peugeot/Header/Inner';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import ModulePeugeotEcommerceSearch from 'modules/Peugeot/Ecommerce/Search';
import { Helmet } from "react-helmet";
class PagePeugeotEcommerceSearch extends Component {

    render() {
        return (
            <div className="category">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Tìm kiếm {this.props.name} - {this.props.code} - Phụ tùng Peugeot</title>
                    <link rel="canonical" href="http://demo.phutungpeugeot.com" />
                </Helmet>
                <ModulePeugeotHeaderInner />
                <main role="main">
                    <ModulePeugeotEcommerceSearch name={this.props.name} code={this.props.code} page={this.props.page} />
                    <ModulePeugeotFooter />
                </main>
            </div>
        );
    }
}

export default PagePeugeotEcommerceSearch;
