import React from 'react';
import {
    Filter, List, Edit, Create,
    Datagrid, TextField, ReferenceField, EditButton, DisabledInput, LongTextInput,
    TabbedForm, FormTab, TextInput, ReferenceInput, SelectInput, BooleanInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const EcommerceSupplierFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Tìm kiếm" source="q" alwaysOn />
        <TextInput label="Ứng dụng" source="software_id" />
        <TextInput label="Website" source="site_id" />
        <TextInput label="Danh mục" source="category_id" />
    </Filter>
);

export const EcommerceSupplierList = (props) => (
    <List {...props} filters={<EcommerceSupplierFilter />}>
        
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="Tiêu đề" />
            <TextField source="created_at" label="Ngày tạo" />
            <TextField source="updated_at" label="Ngày sửa" />
            <ReferenceField label="Ứng dụng" source="software_id" reference="portal_softwares">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="Trang web" source="site_id" reference="portal_sites">
                <TextField source="title" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

const EcommerceSupplierTitle = ({ record }) => {
    return <span>Product {record ? `"${record.title}"` : ''}</span>;
};

export const EcommerceSupplierEdit = (props) => (
    <Edit title={<EcommerceSupplierTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Tổng quan">
                <DisabledInput source="id" />
                <TextInput source="title" className="ra-field-33" label="Tiêu đề" />
                <TextInput source="alias" className="ra-field-33" label="Bí danh" />
                <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="image" className="ra-field-33" label="Đường dẫn ảnh" />
                <TextInput source="tags" className="ra-field-33" label="Tags" />
                <TextInput source="source" className="ra-field-33" label="Nguồn" />
                <BooleanInput source="status" className="ra-field-33" label="Trạng thái" />
                <TextInput source="url" className="ra-field-33" />
                <div className="clear-both">------------------------------</div>
            </FormTab>
            <FormTab label="Nội dung">
                <LongTextInput source="brief" label="Tóm tắt" />
                <RichTextInput source="content" label="Nội dung" />
            </FormTab>
            <FormTab label="Nâng cao">
                <TextInput source="type" className="ra-field-33" label="Loại" />
                <TextInput source="label" className="ra-field-33" label="Nhãn" />
                <TextInput source="link" className="ra-field-33" label="Liên kết" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <BooleanInput source="deleted" className="ra-field-33" label="Đã xóa" />
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

export const EcommerceSupplierCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="Tổng quan">
                <TextInput source="title" className="ra-field-33" label="Tiêu đề" />
                <TextInput source="alias" className="ra-field-33" label="Bí danh" />
                <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="image" className="ra-field-33" label="Đường dẫn ảnh" />
                <TextInput source="tags" className="ra-field-33" label="Tags" />
                <TextInput source="source" className="ra-field-33" label="Nguồn" />
                <BooleanInput source="status" className="ra-field-33" label="Trạng thái" />
                <TextInput source="url" className="ra-field-33" />
                <div className="clear-both">------------------------------</div>
            </FormTab>
            <FormTab label="Nội dung">
                <LongTextInput source="brief" label="Tóm tắt" />
                <RichTextInput source="content" label="Nội dung" />
            </FormTab>
            <FormTab label="Nâng cao">
                <TextInput source="type" className="ra-field-33" label="Loại" />
                <TextInput source="label" className="ra-field-33" label="Nhãn" />
                <TextInput source="link" className="ra-field-33" label="Liên kết" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <BooleanInput source="deleted" className="ra-field-33" label="Đã xóa" />
                <div className="clear-both">------------------------------</div>
            </FormTab>
        </TabbedForm>
    </Create>
);