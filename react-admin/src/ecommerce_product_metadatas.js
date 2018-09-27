import React from 'react';
import {
    Filter, List, Edit, Create,
    Datagrid, TextField, EditButton, DisabledInput, LongTextInput,
    SimpleForm, TextInput, ReferenceInput, SelectInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const EcommerceProductMetadataFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Product" source="product_id" />
        <TextInput label="Type" source="type" />
        <TextInput label="Data Type" source="dataType" />
    </Filter>
);

export const EcommerceProductMetadataList = (props) => (
    <List {...props} filters={<EcommerceProductMetadataFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="product_id" label="Sản phẩm" />
            <TextField source="type" label="Loại" />
            <TextField source="dataType" label="Kiểu dữ liệu" />
            <TextField source="int_value" label="Int value" />
            <TextField source="varchar_value" label="Varchar value" />
            <TextField source="double_value" label="Double value" />
            <TextField source="tinyint_value" label="Tinyint value" />
            <EditButton />
        </Datagrid>
    </List>
);

const EcommerceProductMetadataTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const EcommerceProductMetadataEdit = (props) => (
    <Edit title={<EcommerceProductMetadataTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Product" source="product_id" reference="ecommerce_products" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="type" />
            <TextInput source="dataType" />
            <TextInput source="int_value" />
            <LongTextInput source="varchar_value" />
            <RichTextInput source="text_value" />
            <TextInput source="double_value" />
            <TextInput source="tinyint_value" />
        </SimpleForm>
    </Edit>
);

export const EcommerceProductMetadataCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Product" source="product_id" reference="ecommerce_products" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="type" />
            <TextInput source="dataType" />
            <TextInput source="int_value" />
            <LongTextInput source="varchar_value" />
            <RichTextInput source="text_value" />
            <TextInput source="double_value" />
            <TextInput source="tinyint_value" />
        </SimpleForm>
    </Create>
);