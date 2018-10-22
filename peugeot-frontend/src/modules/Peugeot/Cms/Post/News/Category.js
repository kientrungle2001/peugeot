import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {peugeot_api_url} from 'peugeot_constants';
import { translate } from 'react-i18next';
import { tt } from 'peugeot_language';

class ModulePeugeotCmsPostNewsCategory extends Component {
    componentWillMount() {
        var that = this;
        Axios.get(peugeot_api_url + '/cms_posts?_start=0&_end=100&category_id=' + this.props.categoryId).then(function(resp){
            that.state = {
                items: resp.data
            };
            that.setState(that.state);
        });
    }
    render() {
        return (
            <div>
                <div className="container">
                {this.state && this.state.items.map((item, key)=> {
                    return (
                        <div key={key} className="row mb-3">
                            <div className="col">
                                <div class="media">
                                    <img class="mr-3" src={item.image || 'http://placehold.it/90x90'} alt={tt(item.title)} style={{width: '180px', height: 'auto'}} />
                                    <div class="media-body">
                                        <Link to={'/posts/' + item.type + '/' + item.id + '/' + item.alias}><h5 class="mt-0">{tt(item.title)}</h5></Link>
                                        {tt(item.brief)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        )
    }
}

export default translate('translations')(ModulePeugeotCmsPostNewsCategory);