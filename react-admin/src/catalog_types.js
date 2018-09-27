import React from 'react';
import {
    Filter, List, Edit, Create,
    Datagrid, TextField, EditButton, DisabledInput,
    SimpleForm, TextInput, ReferenceInput, SelectInput, BooleanInput
} from 'react-admin';

const CatalogTypeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Software" source="software_id" />
        <TextInput label="Site" source="site_id" />
        <TextInput label="CategoryId" source="category_id" />
    </Filter>
);

export const CatalogTypeList = (props) => (
    <List {...props} filters={<CatalogTypeFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="scope" label="Phạm vi" />
            <TextField source="name" label="Kiểu" />
            <TextField source="created_at" label="Ngày tạo" />
            <TextField source="updated_at" label="Ngày sửa" />
            <TextField source="software_id" label="Phần mềm" />
            <TextField source="site_id" label="Trang web" />
            <EditButton />
        </Datagrid>
    </List>
);

const CatalogTypeTitle = ({ record }) => {
    return <span>Type {record ? `"${record.title}"` : ''}</span>;
};

export const CatalogTypeEdit = (props) => (
    <Edit title={<CatalogTypeTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="scope" />
            <TextInput source="name" />
            <ReferenceInput label="Category" source="category_id" reference="catalog_categories" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Parent" source="parent_id" reference="catalog_types" allowEmpty={true}>
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" />
            <TextInput source="site_id" />
            <TextInput source="software_id" />
            <BooleanInput source="status" />
            <BooleanInput source="deleted" />
        </SimpleForm>
    </Edit>
);

export const CatalogTypeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="scope" />
            <TextInput source="name" />
            <ReferenceInput label="Category" source="category_id" reference="catalog_categories" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Parent" source="parent_id" reference="catalog_types" allowEmpty={true}>
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" />
            <TextInput source="site_id" />
            <TextInput source="software_id" />
            <BooleanInput source="status" />
            <BooleanInput source="deleted" />
        </SimpleForm>
    </Create>
);