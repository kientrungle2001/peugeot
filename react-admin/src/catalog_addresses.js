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
            <DisabledInput source="id" className="ra-field-33" />
            <TextInput source="scope" label="Phạm vi" className="ra-field-33" />
            <TextInput source="type" label="Loại" className="ra-field-33" />
            <TextInput source="partyType" label="Công ty/Cá nhân" className="ra-field-33" />
            <TextInput source="name" label="Họ tên" className="ra-field-33"/>
            <TextInput source="address" label="Địa chỉ" className="ra-field-33" />
            <TextInput source="phone" label="Điện thoại" className="ra-field-33"/>
            <TextInput source="website" label="Trang web" className="ra-field-33"/>
            <TextInput source="tags" label="Tags" className="ra-field-33"/>
            <TextInput source="label" label="Nhãn" className="ra-field-33" />
            <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <BooleanInput source="status" label="Trạng thái" className="ra-field-33" />
            <BooleanInput source="deleted" label="Đã xóa" className="ra-field-33" />
            <div class="clear-both">---------------------------</div>
        </SimpleForm>
    </Edit>
);

export const CatalogAddressCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="scope" label="Phạm vi" className="ra-field-33" />
            <TextInput source="type" label="Loại" className="ra-field-33" />
            <TextInput source="partyType" label="Công ty/Cá nhân" className="ra-field-33" />
            <TextInput source="name" label="Họ tên" className="ra-field-33" />
            <TextInput source="address" label="Địa chỉ" className="ra-field-33" />
            <TextInput source="phone" label="Điện thoại" className="ra-field-33" />
            <TextInput source="website" label="Trang web" className="ra-field-33" />
            <TextInput source="tags" label="Tags" className="ra-field-33" />
            <TextInput source="label" label="Nhãn" className="ra-field-33" />
            <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <BooleanInput source="status" label="Trạng thái" className="ra-field-33" />
            <BooleanInput source="deleted" label="Đã xóa" className="ra-field-33" />
            <div class="clear-both">---------------------------</div>
        </SimpleForm>
    </Create>
);

export const CatalogAddressShow = (props) => (
    <Show title={<CatalogAddressTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" className="ra-field-33" />
            <TextField source="scope" label="Phạm vi" className="ra-field-33" />
            <TextField source="type" label="Loại" className="ra-field-33" />
            <TextField source="name" label="Họ tên" className="ra-field-33"/>
            <TextField source="address" label="Địa chỉ" className="ra-field-33" />
            <TextField source="phone" label="Số điện thoại" className="ra-field-33" />
            <TextField source="website" label="Website" className="ra-field-33" />
            <TextField source="tags" label="Tags" className="ra-field-33" />
            <TextField source="label" label="Nhãn" className="ra-field-33" />
            <ReferenceField label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true} className="ra-field-33">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="Website" source="site_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                <TextField source="title" />
            </ReferenceField>
            <BooleanField source="status" label="Trạng thái" className="ra-field-33" />
            <BooleanField source="deleted" label="Đã xóa" className="ra-field-33" />
            <div class="clear-both">---------------------------</div>
        </SimpleShowLayout>
    </Show>
);