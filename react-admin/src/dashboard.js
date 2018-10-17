import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';

import ListIcon from '@material-ui/icons/List';
import BookIcon from '@material-ui/icons/Book';
import PeopleIcon from '@material-ui/icons/People';
import CreateIcon from '@material-ui/icons/Create';
import ContactsIcon from '@material-ui/icons/Contacts';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import ShopIcon from '@material-ui/icons/Shop';
import StoreIcon from '@material-ui/icons/Store';
import BusinessIcon from '@material-ui/icons/Business';
import AppsIcon from '@material-ui/icons/Apps';
import WebIcon from '@material-ui/icons/Web';
import { Link } from 'ra-ui-materialui';

const iconStyles = {
    fontSize: '50px'
};
const itemStyles = {
    textAlign:'center',
    marginBottom: '20px'
};

export default () => (
    <Card>
        <CardHeader title="Quản trị Peugeot" />
        <CardContent>
            <Grid container>
                <Grid item xs={3} style={itemStyles}>
                    <Link to="/catalog_categories">
                    <ListIcon style={iconStyles} />
                    <br /> Danh sách
                    </Link>
                </Grid>
                <Grid item xs={3} style={itemStyles}>
                    <Link to="/catalog_types">
                        <BookIcon style={iconStyles} />
                        <br /> Các loại
                    </Link>
                </Grid>
                <Grid item xs={3} style={itemStyles}>
                    <Link to="/catalog_addresses">
                        <ContactsIcon style={iconStyles} />
                        <br /> Địa chỉ
                    </Link>
                </Grid>
                <Grid item xs={3} style={itemStyles}>
                    <Link to="/cms_posts">
                        <CreateIcon style={iconStyles} />
                        <br /> Bài viết
                    </Link>
                </Grid>
                <Grid item xs={3} style={itemStyles}>
                    <Link to="/ecommerce_customers">
                        <PeopleIcon style={iconStyles} />
                        <br /> Khách hàng
                    </Link>
                </Grid>
                <Grid item xs={3} style={itemStyles}>
                    <Link to="/ecommerce_orders">
                        <CompareArrowsIcon style={iconStyles} />
                        <br /> Đơn hàng
                    </Link>
                </Grid>
                <Grid item xs={3} style={itemStyles}>
                    <Link to="/ecommerce_orders">
                        <StoreIcon style={iconStyles} />
                        <br /> Sản phẩm
                    </Link>
                </Grid>
                <Grid item xs={3} style={itemStyles}>
                    <Link to="/ecommerce_suppliers">
                        <BusinessIcon style={iconStyles} />
                        <br /> Nhà cung cấp
                    </Link>
                </Grid>
                <Grid item xs={3} style={itemStyles}>
                    <Link to="/portal_softwares">
                        <AppsIcon style={iconStyles} />
                        <br /> Ứng dụng
                    </Link>
                </Grid>
                <Grid item xs={3} style={itemStyles}>
                    <Link to="/portal_sites">
                        <WebIcon style={iconStyles} />
                        <br /> Website
                    </Link>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);