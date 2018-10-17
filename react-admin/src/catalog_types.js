import React from 'react';
import {
    Filter, List, Edit, Create, Show,
    Datagrid, EditButton, ShowButton, 
    TextField, ReferenceField, BooleanField, 
    SimpleShowLayout,
    SimpleForm, DisabledInput, TextInput, ReferenceInput, SelectInput, BooleanInput
} from 'react-admin';

const CatalogTypeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Tìm kiếm" source="q" alwaysOn />
        <TextInput label="Ứng dụng" source="software_id" />
        <TextInput label="Website" source="site_id" />
        <TextInput label="Danh mục" source="category_id" />
    </Filter>
);

export const CatalogTypeList = (props) => (
    <List {...props} filters={<CatalogTypeFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="scope" label="Phạm vi" />
            <TextField source="name" label="Kiểu" />
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

const CatalogTypeTitle = ({ record }) => {
    return <span>Type {record ? `"${record.title}"` : ''}</span>;
};

export const CatalogTypeEdit = (props) => (
    <Edit title={<CatalogTypeTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="scope" label="Phạm vi" />
            <TextInput source="name" label="Tên kiểu" />
            <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Kiểu cha" source="parent_id" reference="catalog_types" allowEmpty={true}>
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" />
            <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <BooleanInput source="status" label="Trạng thái" />
            <BooleanInput source="deleted" label="Đã xóa" />
        </SimpleForm>
    </Edit>
);

export const CatalogTypeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="scope" label="Phạm vi" />
            <TextInput source="name" label="Tên kiểu" />
            <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Kiểu cha" source="parent_id" reference="catalog_types" allowEmpty={true}>
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" />
            <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <BooleanInput source="status" label="Trạng thái" />
            <BooleanInput source="deleted" label="Đã xóa" />
        </SimpleForm>
    </Create>
);

export const CatalogTypeShow = (props) => (
    <Show title={<CatalogTypeTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="scope" label="Phạm vi" />
            <TextField source="name" label="Tên kiểu" />
            <ReferenceField label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true}>
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="Kiểu cha" source="parent_id" reference="catalog_types" allowEmpty={true}>
                <TextField source="name" />
            </ReferenceField>
            <TextField source="parent_path" />
            <ReferenceField label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                <TextField source="title" />
            </ReferenceField>
            <BooleanField source="status" label="Trạng thái" />
            <BooleanField source="deleted" label="Đã xóa" />
        </SimpleShowLayout>
    </Show>
);