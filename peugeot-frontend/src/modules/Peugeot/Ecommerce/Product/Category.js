import React, { Component } from 'react';
import ModulePeugeotEcommerceProductCategoryNavigation from './Category/Navigation';
import ModulePeugeotEcommerceProductCategoryList from './Category/List';

class ModulePeugeotEcommerceProductCategory extends Component {
    render() {
        return (
            <div>
                <ModulePeugeotEcommerceProductCategoryNavigation categoryId={this.props.categoryId} />
                <ModulePeugeotEcommerceProductCategoryList categoryId={this.props.categoryId} />
            </div>
        )
    }
}

export default ModulePeugeotEcommerceProductCategory;