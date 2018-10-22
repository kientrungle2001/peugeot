import React from 'react';
import {
    Filter, List, Edit, Create, Show,
    TabbedShowLayout, Tab,
    Datagrid, EditButton, ShowButton,
    TextField, ReferenceField, ImageField, BooleanField, RichTextField, ReferenceManyField,
    TabbedForm, FormTab, DisabledInput, LongTextInput, TextInput, ReferenceInput, SelectInput, BooleanInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const EcommerceProductFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Tìm kiếm" source="q" alwaysOn />
        <TextInput label="Ứng dụng" source="software_id" />
        <TextInput label="Website" source="site_id" />
        <TextInput label="Danh mục" source="category_id" />
    </Filter>
);

export const EcommerceProductList = (props) => (
    <List {...props} filters={<EcommerceProductFilter />}>
        
        <Datagrid>
            <TextField source="id" />
            <ImageField source="image" label="Ảnh" />
            <TextField source="title" label="Tiêu đề" />
            <ReferenceField label="Loại sản phẩm" source="category_id" reference="catalog_categories">
                <TextField source="title" />
            </ReferenceField>
            
            <ReferenceField label="Ứng dụng" source="software_id" reference="portal_softwares">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="Trang web" source="site_id" reference="portal_sites">
                <TextField source="title" />
            </ReferenceField>
            <EditButton label="Sửa" />
            <ShowButton label="Xem" />
        </Datagrid>
    </List>
);

const EcommerceProductTitle = ({ record }) => {
    return <span>Product {record ? `"${record.title}"` : ''}</span>;
};

export const EcommerceProductEdit = (props) => (
    <Edit title={<EcommerceProductTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Tổng quan">
                <DisabledInput source="id" />
                <TextInput source="title" label="Tiêu đề" className="ra-field-33" />
                <TextInput source="alias" label="Bí danh" className="ra-field-33" />
                <TextInput source="sku" label="Mã sản phẩm" className="ra-field-33" />
                <TextInput source="branding" label="Nhãn hiệu" className="ra-field-33" />
                <TextInput source="origin" label="Nguồn gốc" className="ra-field-33" />
                <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Nhà cung cấp" source="supplier_id" reference="ecommerce_suppliers" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="image" label="Đường dẫn ảnh" className="ra-field-33" />
                <TextInput source="tags" className="ra-field-33" />
                <TextInput source="source" label="Nguồn" className="ra-field-33" />
                <BooleanInput source="status" label="Trạng thái" className="ra-field-33" />
                <TextInput source="url" className="ra-field-33" />
                <div className="clear-both">------------------------------</div>
            </FormTab>
            <FormTab label="Sản phẩm">
                <TextInput source="price" label="Giá" className="ra-field-33" />
                <TextInput source="oldPrice" label="Giá cũ" className="ra-field-33" />
                <TextInput source="unit" label="Đơn vị" className="ra-field-33" />
                <TextInput source="quantity" label="Số lượng" className="ra-field-33" />
                <TextInput source="supplier_id" label="Nhà cung cấp" className="ra-field-33" />
                <TextInput source="product_set_id" label="Bộ thuộc tính" className="ra-field-33" />
                <div className="clear-both">------------------------------</div>
            </FormTab>
            <FormTab label="Nội dung">
                <LongTextInput source="brief" label="Tóm tắt" />
                <RichTextInput source="content" label="Nội dung" />
            </FormTab>
            <FormTab label="Nâng cao">
                <TextInput source="type" label="Loại" className="ra-field-33" />
                <TextInput source="label" label="Nhãn" className="ra-field-33" />
                <TextInput source="link" label="Liên kết" className="ra-field-33" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <BooleanInput source="deleted" label="Đã xóa" className="ra-field-33" />
                <div className="clear-both">------------------------------</div>
            </FormTab>
            {/*
                <TextInput source="alias" />
            <LongTextInput source="brief" />
            <TextInput source="category_id" />
            <RichTextInput source="content" />
            <BooleanInput source="deleted" />
            <TextInput source="image" />
            <TextInput source="label" />
            <TextInput source="link" />
            <TextInput source="parent_id" />
            <TextInput source="parent_path" />
            <TextInput source="site_id" />
            <TextInput source="software_id" />
            <TextInput source="source" />
            <BooleanInput source="status" />
            <TextInput source="tags" />
            <TextInput source="title" />
            <TextInput source="type" />
            <TextInput source="url" />
            */}
        </TabbedForm>
    </Edit>
);

export const EcommerceProductCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="Tổng quan">
                <TextInput source="title" label="Tiêu đề" className="ra-field-33" />
                <TextInput source="alias" label="Bí danh" className="ra-field-33" />
                <TextInput source="sku" label="Mã sản phẩm" className="ra-field-33" />
                <TextInput source="branding" label="Nhãn hiệu" className="ra-field-33" />
                <TextInput source="origin" label="Nguồn gốc" className="ra-field-33" />
                <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Nhà cung cấp" source="supplier_id" reference="ecommerce_suppliers" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="image" label="Đường dẫn ảnh" className="ra-field-33" />
                <TextInput source="tags" className="ra-field-33" />
                <TextInput source="source" label="Nguồn" className="ra-field-33" />
                <BooleanInput source="status" label="Trạng thái" className="ra-field-33" />
                <TextInput source="url" className="ra-field-33" />
                <div className="clear-both">------------------------------</div>
            </FormTab>
            <FormTab label="Sản phẩm">
                <TextInput source="price" label="Giá" className="ra-field-33" />
                <TextInput source="oldPrice" label="Giá cũ" className="ra-field-33" />
                <TextInput source="unit" label="Đơn vị" className="ra-field-33" />
                <TextInput source="quantity" label="Số lượng" className="ra-field-33" />
                <TextInput source="supplier_id" label="Nhà cung cấp" className="ra-field-33" />
                <TextInput source="product_set_id" label="Bộ thuộc tính" className="ra-field-33" />
                <div className="clear-both">------------------------------</div>
            </FormTab>
            <FormTab label="Nội dung">
                <LongTextInput source="brief" label="Tóm tắt" />
                <RichTextInput source="content" label="Nội dung" />
            </FormTab>
            <FormTab label="Nâng cao">
                <TextInput source="type" label="Loại" className="ra-field-33" />
                <TextInput source="label" label="Nhãn" className="ra-field-33" />
                <TextInput source="link" label="Liên kết" className="ra-field-33" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <BooleanInput source="deleted" label="Đã xóa" className="ra-field-33" />
                <div className="clear-both">------------------------------</div>
            </FormTab>
        </TabbedForm>
    </Create>
);

export const EcommerceProductShow = (props) => (
    <Show title={<EcommerceProductTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="Tổng quan">
                <TextField source="title" label="Tiêu đề" className="ra-field-33" />
                <TextField source="alias" label="Bí danh" className="ra-field-33" />
                <TextField source="sku" label="Mã sản phẩm" className="ra-field-33" />
                <TextField source="branding" label="Nhãn hiệu" className="ra-field-33" />
                <TextField source="origin" label="Nguồn gốc" className="ra-field-33" />
                <ReferenceField label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true} className="ra-field-33">
                    <TextField source="title" />
                </ReferenceField>
                <ReferenceField label="Nhà cung cấp" source="supplier_id" reference="ecommerce_suppliers" allowEmpty={true} className="ra-field-33">
                    <TextField source="title" />
                </ReferenceField>
                <TextField source="image" label="Đường dẫn ảnh" className="ra-field-33" />
                <TextField source="tags" label="Tag" className="ra-field-33" />
                <TextField source="source" label="Nguồn" className="ra-field-33" />
                <BooleanField source="status" label="Trạng thái" className="ra-field-33" />
                <TextField source="url" className="ra-field-33" />
                <div className="clear-both">------------------------------</div>
            </Tab>
            <Tab label="Sản phẩm">
                <TextField source="price" label="Giá" className="ra-field-33" />
                <TextField source="oldPrice" label="Giá cũ" className="ra-field-33" />
                <TextField source="unit" label="Đơn vị" className="ra-field-33" />
                <TextField source="quantity" label="Số lượng" className="ra-field-33" />
                <TextField source="supplier_id" label="Nhà cung cấp" className="ra-field-33" />
                <TextField source="product_set_id" label="Bộ thuộc tính" className="ra-field-33" />
                <div className="clear-both">------------------------------</div>
            </Tab>
            <Tab label="Nội dung">
                <TextField source="brief" label="Tóm tắt" />
                <RichTextField source="content" label="Nội dung" />
            </Tab>
            <Tab label="Nâng cao">
                <TextField source="type" label="Loại" className="ra-field-33" />
                <TextField source="label" label="Nhãn" className="ra-field-33" />
                <TextField source="link" label="Liên kết" className="ra-field-33" />
                <ReferenceField label="Website" source="site_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                    <TextField source="title" />
                </ReferenceField>
                <ReferenceField label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                    <TextField source="title" />
                </ReferenceField>
                <BooleanField source="deleted" label="Đã xóa" className="ra-field-33" />
                <div className="clear-both">------------------------------</div>
            </Tab>
            <Tab label="Thuộc tính" path="ecommerce_product_metadatas">
                <ReferenceManyField reference="ecommerce_product_metadatas" target="product_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="type" label="Loại" />
                        <TextField source="dataType" label="Kiểu dữ liệu" />
                        <TextField source="int_value" label="Int value" />
                        <TextField source="varchar_value" label="Varchar value" />
                        <TextField source="double_value" label="Double value" />
                        <TextField source="tinyint_value" label="Tinyint value" />
                        <EditButton label="Sửa" />
                        <ShowButton label="Xem" />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);