// in src/MyLayout.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Menu,
    Notification,
    Sidebar,
    setSidebarVisibility,
} from 'react-admin';
import {Link} from 'react-router-dom';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1,
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        position: 'relative',
    },
    appFrame: {
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'auto',
    },
    contentWithSidebar: {
        display: 'flex',
        flexGrow: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 2,
        padding: theme.spacing.unit * 3,
        marginTop: '0em',
        paddingLeft: 5,
    },
});
const menuItemStyle = { 
    float: 'left', 
    listStyleType: 'none',
    marginRight: '15px',
    display: 'inline-block'
};
class MyLayout extends Component {
    componentWillMount() {
        this.props.setSidebarVisibility(true);
    }

    render() {
        const {
            children,
            classes,
            dashboard,
            logout,
            open,
            title,
        } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar title={title} open={open} logout={logout} />
                    <main className={classes.contentWithSidebar}>
                        <Sidebar>
                            <Menu logout={logout} hasDashboard={!!dashboard} />
                        </Sidebar>
                        <div className={classes.content}>
                            <ul>
                                <li style={menuItemStyle}>
                                    <Link to="/">Tổng quan</Link>
                                </li>
                                <li style={menuItemStyle}>
                                    <Link to="/catalog_categories">Danh mục</Link>
                                </li>
                                <li style={menuItemStyle}>
                                    <Link to="/ecommerce_products">Sản phẩm</Link>
                                </li>
                                <li style={menuItemStyle}>
                                    <Link to="/ecommerce_orders">Đơn hàng</Link>
                                </li>
                                <li style={menuItemStyle}>
                                    <Link to="/cms_posts">Bài viết</Link>
                                </li>
                            </ul>
                            {children}
                        </div>
                    </main>
                    <Notification />
                </div>
            </div>
        );
    }
}

MyLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    dashboard: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
    ]),
    isLoading: PropTypes.bool.isRequired,
    setSidebarVisibility: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ isLoading: state.admin.loading > 0 });
export default connect(mapStateToProps, { setSidebarVisibility })(withStyles(styles)(MyLayout));