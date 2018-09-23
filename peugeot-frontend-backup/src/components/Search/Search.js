import React, { Component } from 'react';

import {
    Container,
    Row,
    Col
} from 'reactstrap';
import './Search.css';

class Search extends Component {

    render() {
        return (
            <section id="search-bar" className="text-white w-100">
                <Container>
                    <Row>
                        <Col>
                            Phụ Tùng Peugeot
                        </Col>
                        <Col>
                            Mã Phụ Tùng
                        </Col>
                        <Col>
                            Tên phụ tùng
                        </Col>
                        <Col>
                            Tìm kiếm
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Search;