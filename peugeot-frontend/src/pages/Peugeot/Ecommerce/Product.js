import React, { Component } from 'react';
import ModulePeugeotHeaderInner from 'modules/Peugeot/Header/Inner';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import ModulePeugeotEcommerceProductCategory from 'modules/Peugeot/Ecommerce/Product/Category';
import 'pages/Peugeot/Category/Category.css';
class PagePeugeotEcommerceProduct extends Component {

    render() {
        return (
            <div className="category">
                <ModulePeugeotHeaderInner />
                <main role="main">
                    <ModulePeugeotEcommerceProductCategory categoryId={this.props.categoryId} type={this.props.type} />
                    <ModulePeugeotFooter />
                </main>
            </div>
        );
    }
}

export default PagePeugeotEcommerceProduct;
