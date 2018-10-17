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
            <ShowButton />
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

export const EcommerceProductShow = (props) => (
    <Show title={<EcommerceProductTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="summary">
                <TextField source="title" />
                <TextField source="alias" />
                <TextField source="sku" />
                <TextField source="branding" />
                <TextField source="origin" />
                <ReferenceField label="Category" source="category_id" reference="catalog_categories" allowEmpty={true}>
                    <TextField source="title" />
                </ReferenceField>
                <ReferenceField label="Supplier" source="supplier_id" reference="ecommerce_suppliers" allowEmpty={true}>
                    <TextField source="title" />
                </ReferenceField>
                <TextField source="image" />
                <TextField source="tags" />
                <TextField source="source" />
                <BooleanField source="status" />
                <TextField source="url" />
            </Tab>
            <Tab label="product">
                <TextField source="price" />
                <TextField source="oldPrice" />
                <TextField source="unit" />
                <TextField source="quantity" />
                <TextField source="supplier_id" />
                <TextField source="product_set_id" />
            </Tab>
            <Tab label="content">
                <TextField source="brief" />
                <RichTextField source="content" />
            </Tab>
            <Tab label="advance">
                <TextField source="type" />
                <TextField source="label" />
                <TextField source="link" />
                <ReferenceField label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                    <TextField source="title" />
                </ReferenceField>
                <ReferenceField label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                    <TextField source="title" />
                </ReferenceField>
                <BooleanField source="deleted" />
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
                        <EditButton />
                        <ShowButton />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);