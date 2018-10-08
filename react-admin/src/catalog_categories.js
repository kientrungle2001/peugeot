import React from 'react';
import {
    Filter, List, Edit, Create,
    Datagrid, TextField, ReferenceField, SelectField, EditButton, DisabledInput, LongTextInput,
    SimpleForm, TextInput, ReferenceInput, SelectInput, BooleanInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

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
            <SelectField source="status" choices={[
                { id: 0, name: 'Tắt' },
                { id: 1, name: 'Bật' },
            ]} />
            <EditButton />
        </Datagrid>
    </List>
);

const CatalogCategoryTitle = ({ record }) => {
    return <span>Danh mục: {record ? `"${record.title}"` : ''}</span>;
};
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
export const CatalogCategoryEdit = (props) => (
    <Edit title={<CatalogCategoryTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="alias" />
            <LongTextInput source="brief" />
            <RichTextInput source="content" toolbar={toolbar} />
            <BooleanInput source="deleted" />
            <TextInput source="image" />
            <TextInput source="label" />
            <TextInput source="link" />
            <ReferenceInput label="Parent" source="parent_id" reference="catalog_categories" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" />
            <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
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
            <RichTextInput source="content" toolbar={toolbar}/>
            <BooleanInput source="deleted" />
            <TextInput source="image" />
            <TextInput source="label" />
            <TextInput source="link" />
            <ReferenceInput label="Parent" source="parent_id" reference="catalog_categories" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" />
            <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="source" />
            <BooleanInput source="status" />
            <TextInput source="tags" />
            <TextInput source="title" />
            <TextInput source="type" />
            <TextInput source="url" />
        </SimpleForm>
    </Create>
);