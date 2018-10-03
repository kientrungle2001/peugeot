// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { CmsPostList, CmsPostEdit, CmsPostCreate } from './cms_posts';
import { CmsPostMetadataList, CmsPostMetadataEdit, CmsPostMetadataCreate } from './cms_post_metadatas';
import { CatalogCategoryList, CatalogCategoryEdit, CatalogCategoryCreate } from './catalog_categories';
import { CatalogTypeList, CatalogTypeEdit, CatalogTypeCreate } from './catalog_types';
import { EcommerceProductList, EcommerceProductEdit, EcommerceProductCreate } from './ecommerce_products';
import { EcommerceProductMetadataList, EcommerceProductMetadataEdit, EcommerceProductMetadataCreate } from './ecommerce_product_metadatas';
import { EcommerceSupplierList, EcommerceSupplierEdit, EcommerceSupplierCreate } from './ecommerce_suppliers';
import { PortalSoftwareList, PortalSoftwareEdit, PortalSoftwareCreate } from './portal_softwares';
import { PortalSiteList, PortalSiteEdit, PortalSiteCreate } from './portal_sites';
import addUploadCapabilities from './addUploadCapabilities';
import Dashboard from './dashboard';
import authProvider from './authProvider';
import vietnameseMessages from 'ra-language-vietnamese';

const messages = {
  'vi': vietnameseMessages,
};
// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
// const dataProvider = jsonServerProvider('http://localhost:8000/api');
const dataProvider = jsonServerProvider('http://api.phutungpeugeot.com/api');
const uploadCapableDataProvider = addUploadCapabilities(dataProvider);

const App = () => (
  <Admin locale="vi" messages={messages} dataProvider={uploadCapableDataProvider} dashboard={Dashboard} authProvider={authProvider} title="Quản trị Peugeot">
    <Resource name="catalog_categories" list={CatalogCategoryList} edit={CatalogCategoryEdit} create={CatalogCategoryCreate} label="Danh mục" title="Danh mục" options={{ label: 'Danh mục' }} />
    <Resource name="catalog_types" list={CatalogTypeList} edit={CatalogTypeEdit} create={CatalogTypeCreate} label="Các loại" title="Các loại" options={{ label: 'Các loại' }} />
    <Resource name="cms_posts" list={CmsPostList} edit={CmsPostEdit} create={CmsPostCreate} label="Bài viết" title="Bài viết" options={{ label: 'Bài viết' }} />
    <Resource name="cms_post_metadatas" list={CmsPostMetadataList} edit={CmsPostMetadataEdit} create={CmsPostMetadataCreate} label="Thuộc tính Bài Viết" title="Thuộc tính Bài Viết" options={{ label: 'Thuộc tính bài viết' }} />
    <Resource name="ecommerce_products" list={EcommerceProductList} edit={EcommerceProductEdit} create={EcommerceProductCreate} label="Sản phẩm" title="Sản phẩm" options={{ label: 'Sản phẩm' }} />
    <Resource name="ecommerce_product_metadatas" list={EcommerceProductMetadataList} edit={EcommerceProductMetadataEdit} create={EcommerceProductMetadataCreate} label="Thuộc tính Sản phẩm" title="Thuộc tính Sản phẩm" options={{ label: 'Thuộc tính sản phẩm' }} />
    <Resource name="ecommerce_suppliers" list={EcommerceSupplierList} edit={EcommerceSupplierEdit} create={EcommerceSupplierCreate} label="Nhà cung cấp" title="Nhà cung cấp" options={{ label: 'Nhà cung cấp' }} />
    <Resource name="portal_softwares" list={PortalSoftwareList} edit={PortalSoftwareEdit} create={PortalSoftwareCreate} label="Phần mềm" title="Phần mềm" options={{ label: 'Phần mềm' }} />
    <Resource name="portal_sites" list={PortalSiteList} edit={PortalSiteEdit} create={PortalSiteCreate} label="Website" title="Website" options={{ label: 'Website' }} />
  </Admin>
);

export default App;