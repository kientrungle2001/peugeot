import React from 'react';
import {
    Filter, List, Edit, Create, Show,
    Datagrid, EditButton, ShowButton,
    RichTextField, BooleanField, TextField, ReferenceField, 
    DisabledInput, LongTextInput, TextInput, ReferenceInput, SelectInput, BooleanInput,
    TabbedForm, FormTab,
    TabbedShowLayout, Tab,
    ReferenceManyField
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

const CatalogCategoryFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Tìm kiếm" source="q" alwaysOn />
        <TextInput label="Ứng dụng" source="software_id" />
        <TextInput label="Website" source="site_id" />
        <ReferenceInput label="Danh mục cha" source="parent_id" reference="catalog_categories" allowEmpty={true}>
            <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
        </ReferenceInput>
    </Filter>
);

export const CatalogCategoryList = (props) => (
    <List {...props} filters={<CatalogCategoryFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="Tiêu đề" />
            <ReferenceField label="Danh mục cha" source="parent_id" reference="catalog_categories">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="created_at" label="Ngày tạo" />
            <TextField source="updated_at" label="Ngày sửa" />
            <ReferenceField label="Ứng dụng" source="software_id" reference="portal_softwares">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="Trang web" source="site_id" reference="portal_sites">
                <TextField source="title" />
            </ReferenceField>
            <BooleanField source="status" label="Trạng thái" />
            <EditButton label="Sửa" />
            <ShowButton label="Xem" />
        </Datagrid>
    </List>
);

const CatalogCategoryTitle = ({ record }) => {
    return <span>Danh mục: {record ? `"${record.title}"` : ''}</span>;
};

export const CatalogCategoryEdit = (props) => (
    <Edit title={<CatalogCategoryTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Tổng quan">
                <DisabledInput source="id" />
                <TextInput source="type" label="Loại" />
                <TextInput source="title" label="Tiêu đề" />
                <TextInput source="alias" label="Bí danh" />
                <TextInput source="image" label="Đường dẫn ảnh" />
                <ReferenceInput label="Danh mục cha" source="parent_id" reference="catalog_categories" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>    
                <TextInput source="link" label="Đường dẫn" />
                <BooleanInput source="status" label="Trạng thái" />
                <TextInput source="tags" label="Tags" />
            </FormTab>
            <FormTab label="Nội dung">
                <LongTextInput source="brief" />
                <RichTextInput source="content" toolbar={toolbar} />
            </FormTab>
            <FormTab label="Nâng cao">
                <TextInput source="label" label="Nhãn" />
                <BooleanInput source="deleted" label="Đã xóa" />
                <TextInput source="parent_path" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="source" label="Nguồn" />
                <TextInput source="url" />
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const CatalogCategoryCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="Tổng quan">
                <TextInput source="type" label="Loại" />
                <TextInput source="title" label="Tiêu đề" />
                <TextInput source="alias" label="Bí danh" />
                <TextInput source="image" label="Đường dẫn ảnh" />
                <ReferenceInput label="Danh mục cha" source="parent_id" reference="catalog_categories" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="link" label="Đường dẫn" />
                <BooleanInput source="status" label="Trạng thái" />
                <TextInput source="tags" label="Tags" />
            </FormTab>
            <FormTab label="Nội dung">
                <LongTextInput source="brief" />
                <RichTextInput source="content" toolbar={toolbar} />
            </FormTab>
            <FormTab label="Nâng cao">
                <TextInput source="label" label="Nhãn" />
                <BooleanInput source="deleted" label="Đã xóa" />
                <TextInput source="parent_path" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="source" label="Nguồn" />
                <TextInput source="url" />
            </FormTab>
        </TabbedForm>
    </Create>
);

export const CatalogCategoryShow = (props) => (
    <Show title={<CatalogCategoryTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="Tổng quan">
                <TextField source="id" />
                <TextField source="title" label="Tiêu đề" />
                <TextField source="alias" label="Bí danh" />
                <TextField source="image" label="Hình ảnh" />
                <TextField source="link" label="Đường dẫn"/>
                <ReferenceField label="Danh mục cha" source="parent_id" reference="catalog_categories">
                    <TextField source="title" />
                </ReferenceField>
                <BooleanField source="status" label="Trạng thái" />
                <TextField source="source" label="Nguồn" />
                <TextField source="tags" label="Tags" />
                <TextField source="type" label="Loại" />
                <TextField source="url" />
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
            <Tab label="Bài viết" path="cms_posts">
                <ReferenceManyField reference="cms_posts" target="category_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="title" label="Tiêu đề" />
                        <TextField source="created_at" label="Ngày tạo" />
                        <EditButton label="Sửa" />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
            <Tab label="Sản phẩm" path="ecommerce_products">
                <ReferenceManyField reference="ecommerce_products" target="category_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="title" label="Tiêu đề" />
                        <TextField source="price" label="Giá tiền" />
                        <TextField source="created_at" label="Ngày tạo" />
                        <EditButton label="Sửa" />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);