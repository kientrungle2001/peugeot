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
        <TextInput label="Tìm kiếm" source="q" alwaysOn />
        <TextInput label="Bài viết" source="post_id" />
        <TextInput label="Tên thuộc tính" source="type" />
        <TextInput label="Loại giá trị" source="dataType" />
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
            <DisabledInput source="id" className="ra-field-33" />
            <ReferenceInput label="Post" source="post_id" reference="cms_posts" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="type" className="ra-field-33" />
            <TextInput source="dataType" className="ra-field-33" />
            <TextInput source="int_value" className="ra-field-33" />
            <LongTextInput source="varchar_value" className="ra-field-33" />
            <RichTextInput source="text_value" />
            <TextInput source="double_value" className="ra-field-33" />
            <TextInput source="tinyint_value" className="ra-field-33" />
            <div class="clear-both">---------------------------</div>
        </SimpleForm>
    </Edit>
);

export const CmsPostMetadataCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Post" source="post_id" reference="cms_posts" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="type" className="ra-field-33" />
            <TextInput source="dataType" className="ra-field-33" />
            <TextInput source="int_value" className="ra-field-33" />
            <LongTextInput source="varchar_value" className="ra-field-33" />
            <RichTextInput source="text_value" />
            <TextInput source="double_value" className="ra-field-33" />
            <TextInput source="tinyint_value" className="ra-field-33" />
            <div class="clear-both">---------------------------</div>
        </SimpleForm>
    </Create>
);

export const CmsPostMetadataShow = (props) => (
    <Show title={<CmsPostMetadataTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" className="ra-field-33" />
            <TextField source="post_id" label="Bài viết" className="ra-field-33" />
            <TextField source="type" label="Loại" className="ra-field-33" />
            <TextField source="dataType" label="Kiểu dữ liệu" className="ra-field-33" />
            <TextField source="int_value" label="Int value" className="ra-field-33" />
            <TextField source="varchar_value" label="Varchar value" className="ra-field-33" />
            <TextField source="double_value" label="Double value" className="ra-field-33" />
            <TextField source="tinyint_value" label="Tinyint value" className="ra-field-33" />
            <div class="clear-both">---------------------------</div>
        </SimpleShowLayout>
    </Show>
);