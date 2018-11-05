import React, { Component } from 'react';
import ModulePeugeotHeaderInner from 'modules/Peugeot/Header/Inner';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import ModulePeugeotEcommerceSearch from 'modules/Peugeot/Ecommerce/Search';
class PagePeugeotEcommerceSearch extends Component {

    render() {
        return (
            <div className="category">
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
