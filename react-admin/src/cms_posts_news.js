import React from 'react';
import {
    Filter, List, Edit, Create, Show,
    Datagrid, ShowButton, EditButton,
    TextField, ReferenceField, BooleanField, RichTextField, ReferenceManyField, ImageField,
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

const CmsPostNewsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Tìm kiếm" source="q" alwaysOn />
        <TextInput label="Ứng dụng" source="software_id" />
        <TextInput label="Website" source="site_id" />
        <TextInput label="Danh mục" source="category_id" />
    </Filter>
);

export const CmsPostNewsList = (props) => (
    <List {...props} filters={<CmsPostNewsFilter />}>
        <Datagrid>
            <TextField source="id" />
            <ImageField source="image" label="Hình ảnh" />
            <TextField source="title" label="Tiêu đề" />
            <TextField source="created_at" label="Ngày tạo" />
            <TextField source="updated_at" label="Ngày sửa" />
            <ReferenceField label="Ứng dụng" source="software_id" reference="portal_softwares">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="Trang web" source="site_id" reference="portal_sites">
                <TextField source="title" />
            </ReferenceField>
            <EditButton label="Sửa" />
            <ShowButton label="Xem" />
        </Datagrid>
    </List>
);

const CmsPostNewsTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const CmsPostNewsEdit = (props) => (
    <Edit title={<CmsPostNewsTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Tổng quan">
                <DisabledInput source="id" className="ra-field-33" />
                <TextInput source="title" label="Tiêu đề" className="ra-field-33" />
                <TextInput source="alias" label="Bí danh" className="ra-field-33" />
                <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="image" label="Đường dẫn ảnh" className="ra-field-33" />
                <TextInput source="tags" label="Tags" className="ra-field-33" />
                <TextInput source="source" label="Nguồn" className="ra-field-33" />
                <BooleanInput source="status" label="Trạng thái" className="ra-field-33" />
                <TextInput source="url" className="ra-field-33" />
                <div className="clear-both" basePath="/">---------------------------</div>
            </FormTab>
            <FormTab label="Nội dung">
                <LongTextInput source="brief" label="Tóm tắt" />
                <RichTextInput source="content" toolbar={toolbar} label="Nội dung" />
            </FormTab>
            <FormTab label="Nâng cao">
                <TextInput source="type" label="Loại" className="ra-field-33" />
                <TextInput source="label" label="Nhãn" className="ra-field-33" />
                <TextInput source="link" label="Đường dẫn" className="ra-field-33" />
                <ReferenceInput label="Bài viết cha" source="parent_id" reference="cms_posts" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="parent_path" className="ra-field-33" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <BooleanInput source="deleted" label="Đã xóa" className="ra-field-33" />
                <TextInput source="keywords" className="ra-field-33" />
                <TextInput source="description" className="ra-field-33" />
                <div className="clear-both" basePath="/">---------------------------</div>
            </FormTab>
            {/*
                <TextInput source="alias" />
            <LongTextInput source="brief" />
            <TextInput source="category_id" />
            <RichTextInput source="content" />
            <BooleanInput source="deleted" />
            <TextInput source="image" label="Đường dẫn ảnh" className="ra-field-33" />
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

export const CmsPostNewsCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="Tổng quan">
                <TextInput source="title" label="Tiêu đề" className="ra-field-33" />
                <TextInput source="alias" label="Bí danh" className="ra-field-33" />
                <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="image" label="Đường dẫn ảnh" className="ra-field-33" />
                <TextInput source="tags" label="Tags" className="ra-field-33" />
                <TextInput source="source" label="Nguồn" className="ra-field-33" />
                <BooleanInput source="status" label="Trạng thái" className="ra-field-33" />
                <TextInput source="url" className="ra-field-33" />
                <div class="clear-both">---------------------------</div>
            </FormTab>
            <FormTab label="Nội dung">
                <LongTextInput source="brief" label="Tóm tắt" />
                <RichTextInput source="content" toolbar={toolbar} label="Nội dung" />
            </FormTab>
            <FormTab label="Nâng cao">
                <TextInput source="type" label="Kiểu" className="ra-field-33" />
                <TextInput source="label" label="Nhãn" className="ra-field-33" />
                <TextInput source="link" label="Liên kết" className="ra-field-33" />
                <ReferenceInput label="Bài viết cha" source="parent_id" reference="cms_posts" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="parent_path" className="ra-field-33" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <BooleanInput source="deleted" label="Đã xóa" className="ra-field-33" />
                <TextInput source="keywords" className="ra-field-33" />
                <TextInput source="description" className="ra-field-33" />
                <div class="clear-both">---------------------------</div>
            </FormTab>
        </TabbedForm>
    </Create>
);

export const CmsPostNewsShow = (props) => (
    <Show title={<CmsPostNewsTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="Tổng quan">
                <TextField source="id" className="ra-field-33" />
                <TextField source="title" label="Tiêu đề" className="ra-field-33" />
                <TextField source="alias" label="Bí danh" className="ra-field-33" />
                <TextField source="image" label="Đường dẫn ảnh" className="ra-field-33" />
                <TextField source="link" label="Liên kết" className="ra-field-33" />
                <ReferenceField label="Danh mục" source="category_id" reference="catalog_categories" className="ra-field-33">
                    <TextField source="title" />
                </ReferenceField>
                <ReferenceField label="Bài viết cha" source="parent_id" reference="cms_posts" className="ra-field-33">
                    <TextField source="title" />
                </ReferenceField>
                <BooleanField source="status" label="Trạng thái" className="ra-field-33" />
                <TextField source="source" label="Nguồn" className="ra-field-33" />
                <TextField source="tags" label="Tags" className="ra-field-33" />
                <TextField source="type" label="Kiểu" className="ra-field-33" />
                <TextField source="url" label="Đường dẫn" className="ra-field-33" />
                <div class="clear-both">---------------------------</div>
            </Tab>
            <Tab label="Nội dung">
                <TextField source="brief" label="Tóm tắt" />
                <RichTextField source="content" label="Nội dung" />
            </Tab>
            <Tab label="Nâng cao">
                <TextField source="label" label="Nhãn" className="ra-field-33" />
                <TextField source="created_at" label="Ngày tạo" className="ra-field-33" />
                <TextField source="updated_at" label="Ngày sửa" className="ra-field-33" />
                <ReferenceField label="Ứng dụng" source="software_id" reference="portal_softwares" className="ra-field-33">
                    <TextField source="title" />
                </ReferenceField>
                <ReferenceField label="Trang web" source="site_id" reference="portal_sites" className="ra-field-33">
                    <TextField source="title" />
                </ReferenceField>
                <BooleanField source="deleted" label="Đã xóa" className="ra-field-33" />
                <div class="clear-both">---------------------------</div>
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
                        <ShowButton label="Xem" />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);