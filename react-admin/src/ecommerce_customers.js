import React from 'react';
import {
    Filter, List, Edit, Create,
    Datagrid, TextField, ReferenceField, EditButton, DisabledInput,
    SimpleForm, TextInput, ReferenceInput, SelectInput, BooleanInput
} from 'react-admin';

const EcommerceCustomerFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Software" source="software_id" />
        <TextInput label="Site" source="site_id" />
        <TextInput label="CategoryId" source="category_id" />
    </Filter>
);

export const EcommerceCustomerList = (props) => (
    <List {...props} filters={<EcommerceCustomerFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="email" label="Phạm vi" />
            <TextField source="fullname" label="Kiểu" />
            <TextField source="created_at" label="Ngày tạo" />
            <TextField source="updated_at" label="Ngày sửa" />
            <ReferenceField label="Ứng dụng" source="software_id" reference="portal_softwares">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="Trang web" source="site_id" reference="portal_sites">
                <TextField source="title" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

const EcommerceCustomerTitle = ({ record }) => {
    return <span>Khách hàng {record ? `"${record.fullname}"` : ''}</span>;
};

export const EcommerceCustomerEdit = (props) => (
    <Edit title={<EcommerceCustomerTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="email" />
            <TextInput source="fullname" />
            <ReferenceInput label="Category" source="category_id" reference="catalog_categories" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Địa chỉ thanh toán" source="default_billing_address_id" reference="catalog_addresses" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Địa chỉ thanh toán" source="default_shipping_address_id" reference="catalog_addresses" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <BooleanInput source="status" />
            <BooleanInput source="deleted" />
        </SimpleForm>
    </Edit>
);

export const EcommerceCustomerCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="fullname" />
            <ReferenceInput label="Category" source="category_id" reference="catalog_categories" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Địa chỉ thanh toán" source="default_billing_address_id" reference="catalog_addresses" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Địa chỉ thanh toán" source="default_shipping_address_id" reference="catalog_addresses" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <BooleanInput source="status" />
            <BooleanInput source="deleted" />
        </SimpleForm>
    </Create>
);