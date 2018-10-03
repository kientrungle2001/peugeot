import React, { Component } from 'react';

class ModulePeugeotBreadcrumb extends Component {

    render() {
        return (
            <div class="top-bar" style={{'margin-bottom':'20px'}}>
                <div class="container">
                    <ul class="top-bar breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li class="breadcrumb-item active">Sản phẩm</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ModulePeugeotBreadcrumb;