import React, { Component } from 'react';

import {
    Row,
    Col,
    Button,
    Input
} from 'reactstrap';
import './Search.css';

class Search extends Component {

    render() {
        return (
            <section id="search-bar">
            <Row className="row-pd-0 bg-white row-eq-height text-white">
                <Col className="bg-danger pt-1">
                    <Button block color="danger" className="sharp" id="search-label"><img id="search-logo" src="/images/Logo_peugeot.png" alt="img" /> PHỤ TÙNG PEUGEOT</Button>
                </Col>
                <Col>
                    <div className="pt-1 pb-1 pl-2 pr-2">
                    <Input type="text" name="code" placeholder="MÃ PHỤ TÙNG" className="sharp" />
                    </div>
                </Col>
                <Col>
                    <div className="pt-1 pb-1 pl-2 pr-2">
                    <Input type="text" name="name" placeholder="TÊN PHỤ TÙNG" className="sharp" />
                    </div>
                </Col>
                <Col className="bg-danger pt-1">
                    <Button color="danger" block className="sharp">Tìm kiếm</Button>
                </Col>
            </Row>
            </section>
        );
    }
}

export default Search;