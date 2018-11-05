import React, { Component } from 'react';
import { tt } from 'peugeot_language';
import { translate } from 'react-i18next';
import Axios from 'axios';
import { peugeot_api_url } from 'peugeot_constants';

class ModulePeugeotSlideshow extends Component {
    componentDidMount() {
        var that = this;
        Axios.get(peugeot_api_url + '/catalog_categories?parent_id=22&_start=0&_end=10').then(function(resp){
            var items = resp.data;
            that.setState({
                items: items
            });
        });
    }
    render() {
        return (
            <div id="myCarousel" className="carousel slide container" data-ride="carousel">
                <div className="carousel-inner">
                    {this.state && this.state.items.map( (item, index) => {
                        return (<div key={"slide-item-"+index} className={"carousel-item bg-transparent" + (index===0 ? ' active': '')}>
                            <div className="container text-center">
                                <a href={item.link}>
                                    <img className="first-slide" src={item.image} alt={item.title} />
                                </a>
                            </div>
                        </div>);
                    } )}
                    
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default translate('translations')(ModulePeugeotSlideshow);