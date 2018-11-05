import React, { Component } from 'react';
import ModulePeugeotHeaderInner from 'modules/Peugeot/Header/Inner';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import ModulePeugeotCmsPostNewsCategory from 'modules/Peugeot/Cms/Post/News/Category';
import 'pages/Peugeot/Category/Category.css';
import { Helmet } from "react-helmet";

class PagePeugeotCategoryNews extends Component {

    render() {
        return (
            <div className="category">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Danh mục tin tức - Phụ tùng Peugeot</title>
                    <link rel="canonical" href="http://demo.phutungpeugeot.com" />
                </Helmet>
                <ModulePeugeotHeaderInner />
                <main role="main">
                    <ModulePeugeotCmsPostNewsCategory categoryId={this.props.categoryId} type={this.props.type} alias={this.props.alias} />
                    <ModulePeugeotFooter />
                </main>
            </div>
        );
    }
}

export default PagePeugeotCategoryNews;
