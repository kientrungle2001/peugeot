import React from 'react';
import {
    Filter, List, Edit, Create, Show,
    Datagrid, EditButton, ShowButton,
    TextField, ReferenceField, BooleanField,
    SimpleShowLayout,
    SimpleForm, DisabledInput, TextInput, ReferenceInput, SelectInput, BooleanInput
} from 'react-admin';

const CatalogAddressFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Tìm kiếm" source="q" alwaysOn />
        <TextInput label="Ứng dụng" source="software_id" />
        <TextInput label="Trang web" source="site_id" />
    </Filter>
);

export const CatalogAddressList = (props) => (
    <List {...props} filters={<CatalogAddressFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="scope" label="Phạm vi" />
            <TextField source="type" label="Loại" />
            <TextField source="partyType" label="Loại hình" />
            <TextField source="name" label="Tên đầy đủ" />
            <TextField source="address" label="Địa chỉ" />
            <TextField source="phone" label="Số điện thoại" />
            <ReferenceField label="Danh mục" source="category_id" reference="catalog_categories">
                <TextField source="title" />
            </ReferenceField>
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

const CatalogAddressTitle = ({ record }) => {
    return <span>Type {record ? `"${record.title}"` : ''}</span>;
};

export const CatalogAddressEdit = (props) => (
    <Edit title={<CatalogAddressTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="scope" label="Phạm vi" />
            <TextInput source="type" label="Loại" />
            <TextInput source="partyType" label="Công ty/Cá nhân" />
            <TextInput source="name" label="Họ tên"/>
            <TextInput source="address" label="Địa chỉ" />
            <TextInput source="phone" label="Điện thoại"/>
            <TextInput source="website" label="Trang web"/>
            <TextInput source="tags" label="Tags"/>
            <TextInput source="label" label="Nhãn" />
            <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
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

export const CatalogAddressCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="scope" label="Phạm vi" />
            <TextInput source="type" label="Loại" />
            <TextInput source="partyType" label="Công ty/Cá nhân" />
            <TextInput source="name" label="Họ tên" />
            <TextInput source="address" label="Địa chỉ" />
            <TextInput source="phone" label="Điện thoại" />
            <TextInput source="website" label="Trang web" />
            <TextInput source="tags" label="Tags" />
            <TextInput source="label" label="Nhãn" />
            <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
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

export const CatalogAddressShow = (props) => (
    <Show title={<CatalogAddressTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="scope" label="Phạm vi" />
            <TextField source="type" label="Loại" />
            <TextField source="name" label="Họ tên"/>
            <TextField source="address" label="Địa chỉ" />
            <TextField source="phone" label="Số điện thoại" />
            <TextField source="website" label="Website" />
            <TextField source="tags" label="Tags" />
            <TextField source="label" label="Nhãn" />
            <ReferenceField label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true}>
                <TextField source="title" />
            </ReferenceField>
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