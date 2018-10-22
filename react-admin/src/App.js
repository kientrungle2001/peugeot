// in src/App.js
import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import addUploadCapabilities from './addUploadCapabilities';

import authProvider from './authProvider';
import vietnameseMessages from 'ra-language-vietnamese';

import Dashboard from './dashboard';

/**
 * Account
 */

import {
  AccountUserList,
  AccountUserEdit,
  AccountUserCreate,
  AccountUserShow
} from './account_users';

/**
 * Cms
 */

import { 
  CmsPostList, 
  CmsPostEdit, 
  CmsPostCreate, 
  CmsPostShow 
} from './cms_posts';
import { 
  CmsPostMetadataList, 
  CmsPostMetadataEdit, 
  CmsPostMetadataCreate,
  CmsPostMetadataShow 
} from './cms_post_metadatas';

/**
 * Catalog
 */
import { 
  CatalogCategoryList, 
  CatalogCategoryEdit, 
  CatalogCategoryCreate, 
  CatalogCategoryShow 
} from './catalog_categories';
import { 
  CatalogTypeList, 
  CatalogTypeEdit, 
  CatalogTypeCreate, 
  CatalogTypeShow 
} from './catalog_types';

import {
  CatalogAddressList,
  CatalogAddressEdit,
  CatalogAddressCreate,
  CatalogAddressShow
} from './catalog_addresses';

/**
 * Ecommerce
 */
import { 
  EcommerceCustomerList, 
  EcommerceCustomerEdit, 
  EcommerceCustomerCreate,
  EcommerceCustomerShow 
} from './ecommerce_customers';
import { 
  EcommerceOrderList, 
  EcommerceOrderEdit, 
  EcommerceOrderCreate, 
  EcommerceOrderShow 
} from './ecommerce_orders';
import {
  EcommerceOrderProductList,
  EcommerceOrderProductEdit,
  EcommerceOrderProductCreate
} from './ecommerce_order_products';
import { 
  EcommerceProductList, 
  EcommerceProductEdit, 
  EcommerceProductCreate,
  EcommerceProductShow 
} from './ecommerce_products';
import { 
  EcommerceProductMetadataList, 
  EcommerceProductMetadataEdit, 
  EcommerceProductMetadataCreate 
} from './ecommerce_product_metadatas';
import { 
  EcommerceSupplierList, 
  EcommerceSupplierEdit, 
  EcommerceSupplierCreate 
} from './ecommerce_suppliers';



/**
 * Portal
 */
import { 
  PortalSoftwareList, 
  PortalSoftwareEdit, 
  PortalSoftwareCreate 
} from './portal_softwares';
import { 
  PortalSiteList, 
  PortalSiteEdit, 
  PortalSiteCreate 
} from './portal_sites';

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

import './App.css';
import customRoutes from './custom_routes';
import MyLayout from './MyLayout';



const messages = {
  'vi': vietnameseMessages,
};
// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
// const dataProvider = jsonServerProvider('http://localhost:8000/api');
//const dataProvider = jsonServerProvider('http://api.phutungpeugeot.com/api');

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `${token}`);
  return fetchUtils.fetchJson(url, options);
}
const dataProvider = jsonServerProvider('http://api.phutungpeugeot.com/api', httpClient);
const uploadCapableDataProvider = addUploadCapabilities(dataProvider);
const App = () => (
  <Admin 
    appLayout={MyLayout}
    customRoutes={customRoutes}
    locale="vi" messages={messages} 
    dataProvider={uploadCapableDataProvider} 
    dashboard={Dashboard} 
    authProvider={authProvider} 
    title="Quản trị Peugeot">
    
    <Resource
      name="account_users"
      list={AccountUserList}
      edit={AccountUserEdit}
      create={AccountUserCreate}
      show={AccountUserShow}
      label="Người dùng" title="Người dùng"
      options={{ label: 'Người dùng' }} />
    <Resource 
      name="catalog_categories" 
      list={CatalogCategoryList} 
      edit={CatalogCategoryEdit} 
      create={CatalogCategoryCreate} 
      show={CatalogCategoryShow} 
      label="Danh mục" title="Danh mục" 
      options={{ label: 'Danh mục' }} />
    <Resource 
      name="catalog_types" 
      list={CatalogTypeList} 
      edit={CatalogTypeEdit} 
      create={CatalogTypeCreate}
      show={CatalogTypeShow} 
      icon={BookIcon}
      label="Các loại" title="Các loại" 
      options={{ label: 'Các loại' }} />
    <Resource
      name="catalog_addresses"
      list={CatalogAddressList}
      edit={CatalogAddressEdit}
      create={CatalogAddressCreate}
      show={CatalogAddressShow}
      icon={ContactsIcon}
      label="Địa chỉ" title="Địa chỉ"
      options={{ label: 'Địa chỉ' }} />

    <Resource 
      name="cms_posts" 
      list={CmsPostList} 
      edit={CmsPostEdit} 
      create={CmsPostCreate} 
      show={CmsPostShow} 
      icon={CreateIcon}
      label="Bài viết" title="Bài viết" 
      options={{ label: 'Bài viết' }} />
    <Resource 
      name="cms_post_metadatas" 
      list={CmsPostMetadataList} 
      edit={CmsPostMetadataEdit} 
      create={CmsPostMetadataCreate} 
      show={CmsPostMetadataShow}
      icon={CreateIcon}
      label="Thuộc tính Bài Viết" title="Thuộc tính Bài Viết" 
      options={{ label: 'Thuộc tính bài viết' }} />
    <Resource 
      name="ecommerce_customers" 
      list={EcommerceCustomerList} 
      edit={EcommerceCustomerEdit} 
      create={EcommerceCustomerCreate}
      show={EcommerceCustomerShow} 
      icon={PeopleIcon}
      label="Khách hàng" title="Khách hàng" 
      options={{ label: 'Khách hàng' }} />
    <Resource 
      name="ecommerce_orders" 
      list={EcommerceOrderList} 
      edit={EcommerceOrderEdit} 
      create={EcommerceOrderCreate} 
      show={EcommerceOrderShow} 
      icon={CompareArrowsIcon}
      label="Đơn hàng" title="Đơn hàng" 
      options={{ label: 'Đơn hàng' }} />
    <Resource
      name="ecommerce_order_products"
      list={EcommerceOrderProductList}
      edit={EcommerceOrderProductEdit}
      create={EcommerceOrderProductCreate}
      icon={ShopIcon}
      label="Sản phẩm Đơn hàng" title="Sản phẩm Đơn hàng"
      options={{ label: 'Sản phẩm Đơn hàng' }} />
    <Resource 
      name="ecommerce_products" 
      list={EcommerceProductList} 
      edit={EcommerceProductEdit} 
      create={EcommerceProductCreate}
      show={EcommerceProductShow}
      icon={StoreIcon} 
      label="Sản phẩm" title="Sản phẩm" 
      options={{ label: 'Sản phẩm' }} />
    <Resource 
      name="ecommerce_product_metadatas" 
      list={EcommerceProductMetadataList} 
      edit={EcommerceProductMetadataEdit} 
      create={EcommerceProductMetadataCreate}
      icon={StoreIcon} 
      label="Thuộc tính Sản phẩm" title="Thuộc tính Sản phẩm" 
      options={{ label: 'Thuộc tính sản phẩm' }} />
    <Resource 
      name="ecommerce_suppliers" 
      list={EcommerceSupplierList} 
      edit={EcommerceSupplierEdit} 
      create={EcommerceSupplierCreate} 
      icon={BusinessIcon}
      label="Nhà cung cấp" title="Nhà cung cấp" 
      options={{ label: 'Nhà cung cấp' }} />

    <Resource 
      name="portal_softwares" 
      list={PortalSoftwareList} 
      edit={PortalSoftwareEdit} 
      create={PortalSoftwareCreate}
      icon={AppsIcon} 
      label="Phần mềm" title="Phần mềm" 
      options={{ label: 'Phần mềm' }} />
    <Resource 
      name="portal_sites" 
      list={PortalSiteList} 
      edit={PortalSiteEdit} 
      create={PortalSiteCreate}
      icon={WebIcon} 
      label="Website" title="Website" 
      options={{ label: 'Website' }} />
  </Admin>
);

export default App;