import React, { Component } from 'react';
import axios from 'axios';
import {peugeot_api_url} from 'peugeot_constants';
import { tt } from 'peugeot_language';

class ModulePeugeotCmsPost extends Component {
    componentDidMount() {
        var that = this;
        axios.get(peugeot_api_url + '/cms_posts/' + this.props.itemId).then(function(resp) {
            that.state = resp.data;
            that.setState(that.state);
        }).catch(function(err) {
            console.log(err);
        });
    }
    render() {
        return (
            <div className="container">
                <h1>{this.state && tt(this.state.title)}</h1>
                <div className="content" dangerouslySetInnerHTML={{ __html: this.state && tt(this.state.content || '') }}></div>
            </div>
        );
    }
}
export default ModulePeugeotCmsPost;