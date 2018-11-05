import React from 'react';
import {
    Filter, List, Edit, Create,
    Datagrid, TextField, ReferenceField, ImageField, 
    EditButton, DisabledInput, LongTextInput,
    SimpleForm, TextInput, ReferenceInput, SelectInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const EcommerceProductMetadataImageFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Sản phẩm" source="product_id" reference="ecommerce_products" allowEmpty={true} alwaysOn>
            <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
        </ReferenceInput>
    </Filter>
);

export const EcommerceProductMetadataImageList = (props) => (
    <List {...props} filters={<EcommerceProductMetadataImageFilter />}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="Sản phẩm" source="product_id" reference="ecommerce_products">
                <TextField source="title" />
            </ReferenceField>
            <ImageField source="varchar_value" label="Ảnh" />
            <EditButton />
        </Datagrid>
    </List>
);

const EcommerceProductMetadataImageTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const EcommerceProductMetadataImageEdit = (props) => (
    <Edit title={<EcommerceProductMetadataImageTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Sản phẩm" source="product_id" reference="ecommerce_products" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            
            <LongTextInput source="varchar_value" label="Ảnh" />
            <RichTextInput source="text_value" label="Ghi chú" />
        </SimpleForm>
    </Edit>
);

export const EcommerceProductMetadataImageCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Sản phẩm" source="product_id" reference="ecommerce_products" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>

            <LongTextInput source="varchar_value" label="Ảnh" />
            <RichTextInput source="text_value" label="Ghi chú" />
        </SimpleForm>
    </Create>
);