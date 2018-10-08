import React from 'react';
import {
    Filter, List, Edit, Create,
    Datagrid, TextField, ReferenceField, ImageField, EditButton, DisabledInput, LongTextInput,
    TabbedForm, FormTab, TextInput, ReferenceInput, SelectInput, BooleanInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const EcommerceProductFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Software" source="software_id" />
        <TextInput label="Site" source="site_id" />
        <TextInput label="CategoryId" source="category_id" />
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
            <EditButton />
        </Datagrid>
    </List>
);

const EcommerceProductTitle = ({ record }) => {
    return <span>Product {record ? `"${record.title}"` : ''}</span>;
};

export const EcommerceProductEdit = (props) => (
    <Edit title={<EcommerceProductTitle />} {...props}>
        <TabbedForm>
            <FormTab label="summary">
                <DisabledInput source="id" />
                <TextInput source="title" />
                <TextInput source="alias" />
                <TextInput source="sku" />
                <TextInput source="branding" />
                <TextInput source="origin" />
                <ReferenceInput label="Category" source="category_id" reference="catalog_categories" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Supplier" source="supplier_id" reference="ecommerce_suppliers" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="image" />
                <TextInput source="tags" />
                <TextInput source="source" />
                <BooleanInput source="status" />
                <TextInput source="url" />
            </FormTab>
            <FormTab label="product">
                <TextInput source="price" />
                <TextInput source="oldPrice" />
                <TextInput source="unit" />
                <TextInput source="quantity" />
                <TextInput source="supplier_id" />
                <TextInput source="product_set_id" />
            </FormTab>
            <FormTab label="content">
                <LongTextInput source="brief" />
                <RichTextInput source="content" />
            </FormTab>
            <FormTab label="advance">
                <TextInput source="type" />
                <TextInput source="label" />
                <TextInput source="link" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <BooleanInput source="deleted" />
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
            <FormTab label="summary">
                <TextInput source="title" />
                <TextInput source="alias" />
                <TextInput source="sku" />
                <TextInput source="branding" />
                <TextInput source="origin" />
                <ReferenceInput label="Category" source="category_id" reference="catalog_categories" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Supplier" source="supplier_id" reference="ecommerce_suppliers" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="image" />
                <TextInput source="tags" />
                <TextInput source="source" />
                <BooleanInput source="status" />
                <TextInput source="url" />
            </FormTab>
            <FormTab label="product">
                <TextInput source="price" />
                <TextInput source="oldPrice" />
                <TextInput source="unit" />
                <TextInput source="quantity" />
                <TextInput source="supplier_id" />
                <TextInput source="product_set_id" />
            </FormTab>
            <FormTab label="content">
                <LongTextInput source="brief" />
                <RichTextInput source="content" />
            </FormTab>
            <FormTab label="advance">
                <TextInput source="type" />
                <TextInput source="label" />
                <TextInput source="link" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <BooleanInput source="deleted" />
            </FormTab>
        </TabbedForm>
    </Create>
);