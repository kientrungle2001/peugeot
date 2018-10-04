// TODO: Ecommerce Orders
import React from 'react';
import {
    Filter, List, Edit, Create,
    Datagrid, TextField, ReferenceField, EditButton, DisabledInput,
    SimpleForm, TextInput, ReferenceInput, SelectInput, BooleanInput
} from 'react-admin';

const EcommerceOrderFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Software" source="software_id" />
        <TextInput label="Site" source="site_id" />
    </Filter>
);

export const EcommerceOrderList = (props) => (
    <List {...props} filters={<EcommerceOrderFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="scope" label="Phạm vi" />
            <ReferenceField label="Tên khách hàng" source="customer_id" reference="ecommerce_customers">
                <TextField source="fullname" />
            </ReferenceField>
            <ReferenceField label="Email" source="customer_id" reference="ecommerce_customers">
                <TextField source="email" />
            </ReferenceField>
            <ReferenceField label="Số điện thoại" source="customer_id" reference="ecommerce_customers">
                <TextField source="phone" />
            </ReferenceField>
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

const EcommerceOrderTitle = ({ record }) => {
    return <span>Type {record ? `"${record.title}"` : ''}</span>;
};

export const EcommerceOrderEdit = (props) => (
    <Edit title={<EcommerceOrderTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Khách hàng" source="customer_id" reference="ecommerce_customers" allowEmpty={true}>
                <SelectInput optionText="fullname" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="total_amount" />
            <BooleanInput source="status" />
            <BooleanInput source="deleted" />
        </SimpleForm>
    </Edit>
);

export const EcommerceOrderCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Khách hàng" source="customer_id" reference="ecommerce_customers" allowEmpty={true}>
                <SelectInput optionText="fullname" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="total_amount" />
            <BooleanInput source="status" />
            <BooleanInput source="deleted" />
        </SimpleForm>
    </Create>
);