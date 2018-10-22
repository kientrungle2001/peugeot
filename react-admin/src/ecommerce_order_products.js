import React from 'react';
import {
    Filter, List, Edit, Create,
    Datagrid, EditButton, ShowButton, 
    TextField, ReferenceField,
    TabbedForm, FormTab, 
    DisabledInput, LongTextInput, TextInput, ReferenceInput, SelectInput, BooleanInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const EcommerceOrderProductFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Tìm kiếm" source="q" alwaysOn />
        <TextInput label="Ứng dụng" source="software_id" />
        <TextInput label="Website" source="site_id" />
    </Filter>
);

export const EcommerceOrderProductList = (props) => (
    <List {...props} filters={<EcommerceOrderProductFilter />}>

        <Datagrid>
            <TextField source="id" />
            <TextField source="order_id" label="Đơn hàng" />
            <ReferenceField label="Sản phẩm" source="product_id" reference="ecommerce_products">
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

const EcommerceOrderProductTitle = ({ record }) => {
    return <span>Product {record ? `"${record.title}"` : ''}</span>;
};

export const EcommerceOrderProductEdit = (props) => (
    <Edit title={<EcommerceOrderProductTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Tổng quan">
                <DisabledInput source="id" />
                <TextInput source="title" label="Tiêu đề" />
                <TextInput source="alias" label="Bí danh" />
                <TextInput source="sku" label="Mã sản phẩm" />
                <TextInput source="branding" label="Nhà sản xuất" />
                <TextInput source="origin" label="Xuất xứ" />
                <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Nhà cung cấp" source="supplier_id" reference="ecommerce_suppliers" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="image" label="Ảnh" />
                <TextInput source="tags" label="Tags" />
                <TextInput source="source" label="Nguồn" />
                <BooleanInput source="status" label="Trạng thái" />
                <TextInput source="url" />
            </FormTab>
            <FormTab label="Sản phẩm">
                <TextInput source="price" label="Giá" />
                <TextInput source="oldPrice" label="Giá cũ" />
                <TextInput source="unit" label="Đơn vị" />
                <TextInput source="quantity" label="Số lượng" />
                <TextInput source="supplier_id" label="Nhà cung cấp" />
                <TextInput source="product_set_id" label="Bộ thuộc tính" />
            </FormTab>
            <FormTab label="Nội dung">
                <LongTextInput source="brief" label="Tóm tắt" />
                <RichTextInput source="content" label="Nội dung" />
            </FormTab>
            <FormTab label="Nâng cao">
                <TextInput source="type" label="Loại" />
                <TextInput source="label" label="Nhãn" />
                <TextInput source="link" label="Liên kết" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <BooleanInput source="deleted" label="Đã xóa" />
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

export const EcommerceOrderProductCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="Tổng quan">
                <TextInput source="title" label="Tiêu đề" />
                <TextInput source="alias" label="Bí danh" />
                <TextInput source="sku" label="Mã sản phẩm" />
                <TextInput source="branding" label="Nhà sản xuất" />
                <TextInput source="origin" label="Xuất xứ" />
                <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Nhà cung cấp" source="supplier_id" reference="ecommerce_suppliers" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="image" label="Ảnh" />
                <TextInput source="tags" label="Tags" />
                <TextInput source="source" label="Nguồn" />
                <BooleanInput source="status" label="Trạng thái" />
                <TextInput source="url" />
            </FormTab>
            <FormTab label="Sản phẩm">
                <TextInput source="price" label="Giá" />
                <TextInput source="oldPrice" label="Giá cũ" />
                <TextInput source="unit" label="Đơn vị" />
                <TextInput source="quantity" label="Số lượng" />
                <TextInput source="supplier_id" label="Nhà cung cấp" />
                <TextInput source="product_set_id" label="Bộ thuộc tính" />
            </FormTab>
            <FormTab label="Nội dung">
                <LongTextInput source="brief" label="Tóm tắt" />
                <RichTextInput source="content" label="Nội dung" />
            </FormTab>
            <FormTab label="Nâng cao">
                <TextInput source="type" label="Loại" />
                <TextInput source="label" label="Nhãn" />
                <TextInput source="link" label="Liên kết" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <BooleanInput source="deleted" label="Đã xóa" />
            </FormTab>
        </TabbedForm>
    </Create>
);