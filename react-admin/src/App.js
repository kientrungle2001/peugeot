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
  CmsPostNewsList,
  CmsPostNewsEdit,
  CmsPostNewsCreate,
  CmsPostNewsShow
} from './cms_posts_news';
import {
  CmsPostPageList,
  CmsPostPageEdit,
  CmsPostPageCreate,
  CmsPostPageShow
} from './cms_posts_page';
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
  CatalogCategoryRootList,
  CatalogCategoryRootEdit,
  CatalogCategoryRootCreate,
  CatalogCategoryRootShow
} from './catalog_categories_root';
import {
  CatalogCategorySlideshowList,
  CatalogCategorySlideshowEdit,
  CatalogCategorySlideshowCreate,
  CatalogCategorySlideshowShow
} from './catalog_categories_slideshow';
import {
  CatalogCategorySlideList,
  CatalogCategorySlideEdit,
  CatalogCategorySlideCreate,
  CatalogCategorySlideShow
} from './catalog_categories_slide';
import {
  CatalogCategoryMenuList,
  CatalogCategoryMenuEdit,
  CatalogCategoryMenuCreate,
  CatalogCategoryMenuShow
} from './catalog_categories_menu';
import {
  CatalogCategoryMenuItemList,
  CatalogCategoryMenuItemEdit,
  CatalogCategoryMenuItemCreate,
  CatalogCategoryMenuItemShow
} from './catalog_categories_menu_item';
import {
  CatalogCategoryProductList,
  CatalogCategoryProductEdit,
  CatalogCategoryProductCreate,
  CatalogCategoryProductShow
} from './catalog_categories_product';
import {
  CatalogCategoryProductTypeList,
  CatalogCategoryProductTypeEdit,
  CatalogCategoryProductTypeCreate,
  CatalogCategoryProductTypeShow
} from './catalog_categories_product_type';
import {
  CatalogCategoryProductAutoList,
  CatalogCategoryProductAutoEdit,
  CatalogCategoryProductAutoCreate,
  CatalogCategoryProductAutoShow
} from './catalog_categories_product_auto';
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
  EcommerceProductMetadataImageList,
  EcommerceProductMetadataImageEdit,
  EcommerceProductMetadataImageCreate
} from './ecommerce_product_metadatas_image';
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
import { peugeot_api_url } from 'peugeot_consts';


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
const dataProvider = jsonServerProvider(peugeot_api_url, httpClient);

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
      name="catalog_categories_root"
      list={CatalogCategoryRootList}
      edit={CatalogCategoryRootEdit}
      create={CatalogCategoryRootCreate}
      show={CatalogCategoryRootShow}
      label="Danh mục gốc" title="Danh mục gốc"
      options={{ label: 'Danh mục gốc' }} />
    <Resource
      name="catalog_categories_menu"
      list={CatalogCategoryMenuList}
      edit={CatalogCategoryMenuEdit}
      create={CatalogCategoryMenuCreate}
      show={CatalogCategoryMenuShow}
      label="Menu" title="Menu"
      options={{ label: 'Menu' }} />
    <Resource
      name="catalog_categories_menu_item"
      list={CatalogCategoryMenuItemList}
      edit={CatalogCategoryMenuItemEdit}
      create={CatalogCategoryMenuItemCreate}
      show={CatalogCategoryMenuItemShow}
      label="Menu Item" title="Menu Item"
      options={{ label: 'Menu Item' }} />
    <Resource
      name="catalog_categories_slideshow"
      list={CatalogCategorySlideshowList}
      edit={CatalogCategorySlideshowEdit}
      create={CatalogCategorySlideshowCreate}
      show={CatalogCategorySlideshowShow}
      label="Slideshow" title="Slideshow"
      options={{ label: 'Slideshow' }} />
    
    <Resource
      name="catalog_categories_slide"
      list={CatalogCategorySlideList}
      edit={CatalogCategorySlideEdit}
      create={CatalogCategorySlideCreate}
      show={CatalogCategorySlideShow}
      label="Slide" title="Slide"
      options={{ label: 'Slide' }} />
    <Resource
      name="catalog_categories_product"
      list={CatalogCategoryProductList}
      edit={CatalogCategoryProductEdit}
      create={CatalogCategoryProductCreate}
      show={CatalogCategoryProductShow}
      label="Danh mục sản phẩm" title="Danh mục sản phẩm"
      options={{ label: 'Danh mục sản phẩm' }} />
    <Resource
      name="catalog_categories_product_type"
      list={CatalogCategoryProductTypeList}
      edit={CatalogCategoryProductTypeEdit}
      create={CatalogCategoryProductTypeCreate}
      show={CatalogCategoryProductTypeShow}
      label="Phụ tùng" title="Phụ tùng"
      options={{ label: 'Phụ tùng' }} />
    <Resource
      name="catalog_categories_product_auto"
      list={CatalogCategoryProductAutoList}
      edit={CatalogCategoryProductAutoEdit}
      create={CatalogCategoryProductAutoCreate}
      show={CatalogCategoryProductAutoShow}
      label="Ô tô" title="Ô tô"
      options={{ label: 'Ô tô' }} />
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
      name="cms_posts_news"
      list={CmsPostNewsList}
      edit={CmsPostNewsEdit}
      create={CmsPostNewsCreate}
      show={CmsPostNewsShow}
      icon={CreateIcon}
      label="Tin tức" title="Tin tức"
      options={{ label: 'Tin tức' }} />
      <Resource
      name="cms_posts_page"
      list={CmsPostPageList}
      edit={CmsPostPageEdit}
      create={CmsPostPageCreate}
      show={CmsPostPageShow}
      icon={CreateIcon}
      label="Landing Page" title="Landing Page"
      options={{ label: 'Landing Page' }} />
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
      name="ecommerce_product_metadatas_image" 
      list={EcommerceProductMetadataImageList} 
      edit={EcommerceProductMetadataImageEdit} 
      create={EcommerceProductMetadataImageCreate}
      icon={StoreIcon} 
      label="Ảnh Sản phẩm" title="Ảnh Sản phẩm" 
      options={{ label: 'Ảnh sản phẩm' }} />
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