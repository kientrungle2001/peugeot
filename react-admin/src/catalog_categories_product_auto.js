import React from 'react';
import {
    Filter, List, Edit, Create, Show,
    Datagrid, EditButton, ShowButton,
    RichTextField, BooleanField, TextField, ReferenceField, ImageField,
    DisabledInput, LongTextInput, TextInput, ReferenceInput, SelectInput, AutocompleteInput, BooleanInput,
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

const CatalogCategoryProductAutoFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Tìm kiếm" source="q" alwaysOn />
        <TextInput label="Ứng dụng" source="software_id" />
        <TextInput label="Website" source="site_id" />
        <ReferenceInput label="Danh mục cha" source="parent_id" reference="catalog_categories_product_type" allowEmpty={true}>
            <AutocompleteInput optionText="title" optionValue="id" allowEmpty={true} />
        </ReferenceInput>
    </Filter>
);

export const CatalogCategoryProductAutoList = (props) => (
    <List {...props} filters={<CatalogCategoryProductAutoFilter />}>
        <Datagrid>
            <TextField source="id" />
            <ImageField source="image" label="Ảnh" />
            <TextField source="title" label="Tiêu đề" />
            <ReferenceField label="Danh mục cha" source="parent_id" reference="catalog_categories_product">
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

const CatalogCategoryProductAutoTitle = ({ record }) => {
    return <span>Danh mục: {record ? `"${record.title}"` : ''}</span>;
};

export const CatalogCategoryProductAutoEdit = (props) => (
    <Edit title={<CatalogCategoryProductAutoTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Tổng quan">
                <DisabledInput source="id" className="ra-field-33" />
                <TextInput source="type" label="Loại" className="ra-field-33" />
                <TextInput source="title" label="Tiêu đề" className="ra-field-33" />
                <TextInput source="alias" label="Bí danh" className="ra-field-33" />
                <TextInput source="image" label="Đường dẫn ảnh" className="ra-field-33" />
                <ReferenceInput label="Danh mục cha" source="parent_id" reference="catalog_categories_product" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="link" label="Đường dẫn" className="ra-field-33" />
                <BooleanInput source="status" label="Trạng thái" className="ra-field-33" />
                <TextInput source="tags" label="Tags" className="ra-field-33" />
                <div class="clear-both">---------------------------</div>
            </FormTab>
            <FormTab label="Nội dung">
                <LongTextInput source="brief" />
                <RichTextInput source="content" toolbar={toolbar} />
            </FormTab>
            <FormTab label="Nâng cao">
                <TextInput source="label" label="Nhãn" className="ra-field-33" />
                <BooleanInput source="deleted" label="Đã xóa" className="ra-field-33" />
                <TextInput source="parent_path" className="ra-field-33" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="source" label="Nguồn" className="ra-field-33" />
                <TextInput source="url" className="ra-field-33" />
                <TextInput source="keywords" className="ra-field-33" />
                <TextInput source="description" className="ra-field-33" />
                <div class="clear-both">---------------------------</div>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const CatalogCategoryProductAutoCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="Tổng quan">
                <TextInput source="type" label="Loại" className="ra-field-33" />
                <TextInput source="title" label="Tiêu đề" className="ra-field-33" />
                <TextInput source="alias" label="Bí danh" className="ra-field-33" />
                <TextInput source="image" label="Đường dẫn ảnh" className="ra-field-33" />
                <ReferenceInput label="Danh mục cha" source="parent_id" reference="catalog_categories_product" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="link" label="Đường dẫn" className="ra-field-33" />
                <BooleanInput source="status" label="Trạng thái" className="ra-field-33" />
                <TextInput source="tags" label="Tags" className="ra-field-33" />
                <div class="clear-both">---------------------------</div>
            </FormTab>
            <FormTab label="Nội dung">
                <LongTextInput source="brief" />
                <RichTextInput source="content" toolbar={toolbar} />
            </FormTab>
            <FormTab label="Nâng cao">
                <TextInput source="label" label="Nhãn" className="ra-field-33" />
                <BooleanInput source="deleted" label="Đã xóa" className="ra-field-33" />
                <TextInput source="parent_path" className="ra-field-33" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="source" label="Nguồn" className="ra-field-33" />
                <TextInput source="url" className="ra-field-33" />
                <TextInput source="keywords" className="ra-field-33" />
                <TextInput source="description" className="ra-field-33" />
                <div class="clear-both">---------------------------</div>
            </FormTab>
        </TabbedForm>
    </Create>
);

export const CatalogCategoryProductAutoShow = (props) => (
    <Show title={<CatalogCategoryProductAutoTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="Tổng quan">
                <TextField source="id" className="ra-field-33" />
                <TextField source="title" label="Tiêu đề" className="ra-field-33" />
                <TextField source="alias" label="Bí danh" className="ra-field-33" />
                <TextField source="image" label="Hình ảnh" className="ra-field-33" />
                <TextField source="link" label="Đường dẫn" className="ra-field-33" />
                <ReferenceField label="Danh mục cha" source="parent_id" reference="catalog_categories_product" className="ra-field-33">
                    <TextField source="title" />
                </ReferenceField>
                <BooleanField source="status" label="Trạng thái" className="ra-field-33" />
                <TextField source="source" label="Nguồn" className="ra-field-33" />
                <TextField source="tags" label="Tags" className="ra-field-33" />
                <TextField source="type" label="Loại" className="ra-field-33" />
                <TextField source="url" className="ra-field-33" />
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