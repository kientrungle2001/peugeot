import React from 'react';
import { Filter, List, Edit, Create, 
    Datagrid,  TextField, EditButton, DisabledInput, LongTextInput, 
    TabbedForm, FormTab, TextInput, ReferenceInput, SelectInput,
    BooleanInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const CmsPostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Software" source="software_id" />
        <TextInput label="Site" source="site_id" />
        <TextInput label="CategoryId" source="category_id" />
    </Filter>
);

export const CmsPostList = (props) => (
    <List {...props} filters={<CmsPostFilter />}>
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

const CmsPostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const CmsPostEdit = (props) => (
    <Edit title={<CmsPostTitle />} {...props}>
        <TabbedForm>
            <FormTab label="summary">
                <DisabledInput source="id" />
                <TextInput source="title" />
                <TextInput source="alias" />
                <ReferenceInput label="Category" source="category_id" reference="catalog_categories" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true}/>
                </ReferenceInput>
                <TextInput source="image" />
                <TextInput source="tags" />
                <TextInput source="source" />
                <BooleanInput source="status" />
                <TextInput source="url" />
            </FormTab>
            <FormTab label="content">
                <LongTextInput source="brief" />
                <RichTextInput source="content" />
            </FormTab>
            <FormTab label="advance">
                <TextInput source="type" />
                <TextInput source="label" />
                <TextInput source="link" />
                <ReferenceInput label="Parent" source="parent_id" reference="cms_posts" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true}/>
                </ReferenceInput>
                <TextInput source="parent_path" />
                <TextInput source="site_id" />
                <TextInput source="software_id" />
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

export const CmsPostCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="summary">
                <TextInput source="title" />
                <TextInput source="alias" />
                <ReferenceInput label="Category" source="category_id" reference="catalog_categories" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="image" />
                <TextInput source="tags" />
                <TextInput source="source" />
                <BooleanInput source="status" />
                <TextInput source="url" />
            </FormTab>
            <FormTab label="content">
                <LongTextInput source="brief" />
                <RichTextInput source="content" />
            </FormTab>
            <FormTab label="advance">
                <TextInput source="type" />
                <TextInput source="label" />
                <TextInput source="link" />
                <ReferenceInput label="Parent" source="parent_id" reference="cms_posts" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="parent_path" />
                <TextInput source="site_id" />
                <TextInput source="software_id" />
                <BooleanInput source="deleted" />
            </FormTab>
        </TabbedForm>
    </Create>
);