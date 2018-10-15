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
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Software" source="software_id" />
        <TextInput label="Site" source="site_id" />
        <ReferenceInput label="Parent" source="parent_id" reference="catalog_categories" allowEmpty={true}>
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
            <BooleanField source="status" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

const CatalogCategoryTitle = ({ record }) => {
    return <span>Danh mục: {record ? `"${record.title}"` : ''}</span>;
};

export const CatalogCategoryEdit = (props) => (
    <Edit title={<CatalogCategoryTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Summary">
                <DisabledInput source="id" />
                <TextInput source="type" />
                <TextInput source="title" />
                <TextInput source="alias" />
                <TextInput source="image" />
                <ReferenceInput label="Parent" source="parent_id" reference="catalog_categories" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>    
                <TextInput source="link" />
                <BooleanInput source="status" />
                <TextInput source="tags" />
            </FormTab>
            <FormTab label="Content">
                <LongTextInput source="brief" />
                <RichTextInput source="content" toolbar={toolbar} />
            </FormTab>
            <FormTab label="Advanced">
                <TextInput source="label" />
                <BooleanInput source="deleted" />
                <TextInput source="parent_path" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="source" />
                <TextInput source="url" />
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const CatalogCategoryCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="Summary">
                <TextInput source="type" />
                <TextInput source="title" />
                <TextInput source="alias" />
                <TextInput source="image" />
                <ReferenceInput label="Parent" source="parent_id" reference="catalog_categories" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="link" />
                <BooleanInput source="status" />
                <TextInput source="tags" />
            </FormTab>
            <FormTab label="Content">
                <LongTextInput source="brief" />
                <RichTextInput source="content" toolbar={toolbar} />
            </FormTab>
            <FormTab label="Advanced">
                <TextInput source="label" />
                <BooleanInput source="deleted" />
                <TextInput source="parent_path" />
                <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                    <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
                </ReferenceInput>
                <TextInput source="source" />
                <TextInput source="url" />
            </FormTab>
        </TabbedForm>
    </Create>
);

export const CatalogCategoryShow = (props) => (
    <Show title={<CatalogCategoryTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="Summary">
                <TextField source="id" />
                <TextField source="title" label="Tiêu đề" />
                <TextField source="alias" />
                <TextField source="image" />
                <TextField source="link" />
                <ReferenceField label="Danh mục cha" source="parent_id" reference="catalog_categories">
                    <TextField source="title" />
                </ReferenceField>
                <BooleanField source="status" />
                <TextField source="source" />
                <TextField source="tags" />
                <TextField source="type" />
                <TextField source="url" />
            </Tab>
            <Tab label="Content">
                <TextField source="brief" />
                <RichTextField source="content" />
            </Tab>
            <Tab label="Advanced">
                <TextField source="label" />
                <TextField source="created_at" label="Ngày tạo" />
                <TextField source="updated_at" label="Ngày sửa" />
                <ReferenceField label="Ứng dụng" source="software_id" reference="portal_softwares">
                    <TextField source="title" />
                </ReferenceField>
                <ReferenceField label="Trang web" source="site_id" reference="portal_sites">
                    <TextField source="title" />
                </ReferenceField>
                <BooleanField source="deleted" />
            </Tab>
            <Tab label="Bài viết" path="cms_posts">
                <ReferenceManyField reference="cms_posts" target="category_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="title" />
                        <TextField source="created_at" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);