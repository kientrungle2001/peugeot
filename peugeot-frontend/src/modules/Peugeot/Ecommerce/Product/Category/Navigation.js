import React, { Component } from 'react';

class ModulePeugeotEcommerceProductCategoryNavigation extends Component {
    render() {
        return (
            <div className="container search-by-cate">
                <h2 className="tit-category"><i className="fas fa-car"></i> Tìm phụ tùng theo xe</h2>
                <div className="row">
                    <div className="col">
                        <a className="btn button-cate active" href="#">Tất cả</a>
                        <a className="btn button-cate" href="#">Peugeot 5008</a>
                        <a className="btn button-cate" href="#">Peugeot 508</a>
                        <a className="btn button-cate" href="#">Peugeot 3008</a>
                        <a className="btn button-cate" href="#">Peugeot 3008 FL</a>
                        <a className="btn button-cate" href="#">Peugeot 408</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModulePeugeotEcommerceProductCategoryNavigation;