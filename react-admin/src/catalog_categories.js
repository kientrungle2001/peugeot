import React from 'react';
import {
    Filter, List, Edit, Create,
    Datagrid, TextField, EditButton, DisabledInput, LongTextInput,
    SimpleForm, TextInput, ReferenceInput, SelectInput, BooleanInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const CatalogCategoryFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Software" source="software_id" />
        <TextInput label="Site" source="site_id" />
        <TextInput label="CategoryId" source="category_id" />
    </Filter>
);

export const CatalogCategoryList = (props) => (
    <List {...props} filters={<CatalogCategoryFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="Tiêu đề" />
            <TextField source="created_at" label="Ngày tạo" />
            <TextField source="updated_at" label="Ngày sửa" />
            <TextField source="software_id" label="Phần mềm" />
            <TextField source="site_id" label="Trang web" />
            <EditButton />
        </Datagrid>
    </List>
);

const CatalogCategoryTitle = ({ record }) => {
    return <span>Danh mục: {record ? `"${record.title}"` : ''}</span>;
};

export const CatalogCategoryEdit = (props) => (
    <Edit title={<CatalogCategoryTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="alias" />
            <LongTextInput source="brief" />
            <RichTextInput source="content" />
            <BooleanInput source="deleted" />
            <TextInput source="image" />
            <TextInput source="label" />
            <TextInput source="link" />
            <ReferenceInput label="Parent" source="parent_id" reference="catalog_categories" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" />
            <TextInput source="site_id" />
            <TextInput source="software_id" />
            <TextInput source="source" />
            <BooleanInput source="status" />
            <TextInput source="tags" />
            <TextInput source="title" />
            <TextInput source="type" />
            <TextInput source="url" />
        </SimpleForm>
    </Edit>
);

export const CatalogCategoryCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="alias" />
            <LongTextInput source="brief" />
            <RichTextInput source="content" />
            <BooleanInput source="deleted" />
            <TextInput source="image" />
            <TextInput source="label" />
            <TextInput source="link" />
            <ReferenceInput label="Parent" source="parent_id" reference="catalog_categories" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" />
            <TextInput source="site_id" />
            <TextInput source="software_id" />
            <TextInput source="source" />
            <BooleanInput source="status" />
            <TextInput source="tags" />
            <TextInput source="title" />
            <TextInput source="type" />
            <TextInput source="url" />
        </SimpleForm>
    </Create>
);