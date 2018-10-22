import React, { Component } from 'react';
import ModulePeugeotHeaderInner from 'modules/Peugeot/Header/Inner';
import ModulePeugeotFooter from 'modules/Peugeot/Footer/Footer';
import ModulePeugeotCmsContact from 'modules/Peugeot/Cms/Contact';
import 'pages/Peugeot/Category/Category.css';

class PagePeugeotCmsPost extends Component {

    render() {
        return (
            <div className="category">
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
