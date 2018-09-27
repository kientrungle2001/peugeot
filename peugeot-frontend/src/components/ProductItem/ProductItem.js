import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardFooter
} from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope);

class ProductItem extends Component {

    render() {
        return (
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody className="text-center">
                    <CardTitle>8118506D60</CardTitle>
                    <CardSubtitle>Đèn pha trái Toyota Camry E</CardSubtitle>
                </CardBody>
                <CardFooter className="text-center">
                    Giá: Liên hệ
                </CardFooter>
            </Card>
        );
    }
}

export default ProductItem;