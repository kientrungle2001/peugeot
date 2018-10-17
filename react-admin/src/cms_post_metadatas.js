import React from 'react';
import {
    Filter, List, Edit, Create, Show,
    Datagrid, TextField, EditButton, ShowButton,
    SimpleShowLayout,
    SimpleForm, TextInput, ReferenceInput, DisabledInput, LongTextInput, SelectInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const CmsPostMetadataFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Post" source="post_id" />
        <TextInput label="Type" source="type" />
        <TextInput label="Data Type" source="dataType" />
    </Filter>
);

export const CmsPostMetadataList = (props) => (
    <List {...props} filters={<CmsPostMetadataFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="post_id" label="Bài viết" />
            <TextField source="type" label="Loại" />
            <TextField source="dataType" label="Kiểu dữ liệu" />
            <TextField source="int_value" label="Int value" />
            <TextField source="varchar_value" label="Varchar value" />
            <TextField source="double_value" label="Double value" />
            <TextField source="tinyint_value" label="Tinyint value" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

const CmsPostMetadataTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const CmsPostMetadataEdit = (props) => (
    <Edit title={<CmsPostMetadataTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Post" source="post_id" reference="cms_posts" allowEmpty={true}>
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

export const CmsPostMetadataCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Post" source="post_id" reference="cms_posts" allowEmpty={true}>
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

export const CmsPostMetadataShow = (props) => (
    <Show title={<CmsPostMetadataTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="post_id" label="Bài viết" />
            <TextField source="type" label="Loại" />
            <TextField source="dataType" label="Kiểu dữ liệu" />
            <TextField source="int_value" label="Int value" />
            <TextField source="varchar_value" label="Varchar value" />
            <TextField source="double_value" label="Double value" />
            <TextField source="tinyint_value" label="Tinyint value" />
        </SimpleShowLayout>
    </Show>
);