import React from 'react';
import { 
    Filter, List, Edit, Create, Show, 
    Datagrid, ShowButton, EditButton,
    TextField, ReferenceField, BooleanField, RichTextField, ReferenceManyField,
    DisabledInput, LongTextInput, TextInput, ReferenceInput, SelectInput, BooleanInput, 
    TabbedForm, FormTab,
    TabbedShowLayout, Tab 
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

var toolbar = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript

    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean', 'image']                                         // remove formatting button
];

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
                <RichTextInput source="content" toolbar={toolbar} />
            </FormTab>
            <FormTab label="advance">
                <TextInput source="type" />
                <TextInput source="label" />
                <TextInput source="link" />
                <ReferenceInput label="Parent" source="parent_id" reference="cms_posts" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true}/>
                </ReferenceInput>
                <TextInput source="parent_path" />
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
                <RichTextInput source="content" toolbar={toolbar} />
            </FormTab>
            <FormTab label="advance">
                <TextInput source="type" />
                <TextInput source="label" />
                <TextInput source="link" />
                <ReferenceInput label="Parent" source="parent_id" reference="cms_posts" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="parent_path" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <BooleanInput source="deleted" label="Đã xóa" />
            </FormTab>
        </TabbedForm>
    </Create>
);

export const CmsPostShow = (props) => (
    <Show title={<CmsPostTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="Tổng quan">
                <TextField source="id" />
                <TextField source="title" label="Tiêu đề" />
                <TextField source="alias" label="Bí danh" />
                <TextField source="image" label="Đường dẫn ảnh" />
                <TextField source="link" label="Liên kết" />
                <ReferenceField label="Danh mục" source="category_id" reference="catalog_categories">
                    <TextField source="title" />
                </ReferenceField>
                <ReferenceField label="Bài viết cha" source="parent_id" reference="cms_posts">
                    <TextField source="title" />
                </ReferenceField>
                <BooleanField source="status" label="Trạng thái" />
                <TextField source="source" label="Nguồn" />
                <TextField source="tags" label="Tags" />
                <TextField source="type" label="Kiểu" />
                <TextField source="url" label="Đường dẫn" />
            </Tab>
            <Tab label="Nội dung">
                <TextField source="brief" label="Tóm tắt" />
                <RichTextField source="content" label="Nội dung" />
            </Tab>
            <Tab label="Nâng cao">
                <TextField source="label" label="Nhãn" />
                <TextField source="created_at" label="Ngày tạo" />
                <TextField source="updated_at" label="Ngày sửa" />
                <ReferenceField label="Ứng dụng" source="software_id" reference="portal_softwares">
                    <TextField source="title" />
                </ReferenceField>
                <ReferenceField label="Trang web" source="site_id" reference="portal_sites">
                    <TextField source="title" />
                </ReferenceField>
                <BooleanField source="deleted" label="Đã xóa" />
            </Tab>
            <Tab label="Thuộc tính" path="cms_post_metadatas">
                <ReferenceManyField reference="cms_post_metadatas" target="post_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="type" label="Loại" />
                        <TextField source="dataType" label="Kiểu dữ liệu" />
                        <TextField source="int_value" label="Int value" />
                        <TextField source="varchar_value" label="Varchar value" />
                        <TextField source="double_value" label="Double value" />
                        <TextField source="tinyint_value" label="Tinyint value" />
                        <EditButton label="Sửa" />
                        <ShowButton label="Xóa" />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);