import React from 'react';
import {
    Filter, List, Edit, Create, Show,
    Datagrid, EditButton, ShowButton,
    TabbedShowLayout, Tab,
    TextField, ReferenceField, BooleanField, ReferenceManyField,
    SimpleForm, DisabledInput, TextInput, ReferenceInput, SelectInput, BooleanInput
} from 'react-admin';

const EcommerceCustomerFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Tìm kiếm" source="q" alwaysOn />
        <TextInput label="Ứng dụng" source="software_id" />
        <TextInput label="Website" source="site_id" />
        <TextInput label="Danh mục" source="category_id" />
    </Filter>
);

export const EcommerceCustomerList = (props) => (
    <List {...props} filters={<EcommerceCustomerFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="email" label="Email" />
            <TextField source="fullname" label="Họ tên" />
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

const EcommerceCustomerTitle = ({ record }) => {
    return <span>Khách hàng {record ? `"${record.fullname}"` : ''}</span>;
};

export const EcommerceCustomerEdit = (props) => (
    <Edit title={<EcommerceCustomerTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="email" label="Email" />
            <TextInput source="fullname" label="Họ tên" />
            <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true}>
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Địa chỉ thanh toán" source="default_billing_address_id" reference="catalog_addresses" allowEmpty={true}>
                <SelectInput optionText="address" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Địa chỉ giao hàng" source="default_shipping_address_id" reference="catalog_addresses" allowEmpty={true}>
                <SelectInput optionText="address" optionValue="id" allowEmpty={true} />
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

export const EcommerceCustomerCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="fullname" label="Họ tên" />
            <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true}>
                <SelectInput source="title" />
            </ReferenceInput>
            <ReferenceInput label="Địa chỉ thanh toán" source="default_billing_address_id" reference="catalog_addresses" allowEmpty={true}>
                <SelectInput source="address" />
            </ReferenceInput>
            <ReferenceInput label="Địa chỉ giao hàng" source="default_shipping_address_id" reference="catalog_addresses" allowEmpty={true}>
                <SelectInput source="address" />
            </ReferenceInput>
            <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true}>
                <SelectInput source="title" />
            </ReferenceInput>
            <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                <SelectInput source="title" />
            </ReferenceInput>
            <BooleanInput source="status" label="Trạng thái" />
            <BooleanInput source="deleted" label="Đã xóa" />
        </SimpleForm>
    </Create>
);

export const EcommerceCustomerShow = (props) => (
    <Show title={<EcommerceCustomerTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="Thông tin">
                <TextField source="id" className="ra-field-33" />
                <TextField source="email" className="ra-field-33" />
                <TextField source="fullname" className="ra-field-33" label="Họ tên" />
                <ReferenceField label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true} className="ra-field-33">
                    <TextField source="title" />
                </ReferenceField>
                <ReferenceField label="Địa chỉ thanh toán" source="default_billing_address_id" reference="catalog_addresses" allowEmpty={true} className="ra-field-33">
                    <TextField source="address" />
                </ReferenceField>
                <ReferenceField label="Địa chỉ giao hàng" source="default_shipping_address_id" reference="catalog_addresses" allowEmpty={true} className="ra-field-33">
                    <TextField source="address" />
                </ReferenceField>
                <ReferenceField label="Website" source="site_id" reference="portal_sites" allowEmpty={true} className="ra-field-25">
                    <TextField source="title" />
                </ReferenceField>
                <ReferenceField label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-25">
                    <TextField source="title" />
                </ReferenceField>
                <BooleanField source="status" label="Trạng thái" className="ra-field-25" />
                <BooleanField source="deleted" label="Đã xóa" className="ra-field-25" />
            </Tab>
            <Tab label="Đơn hàng" path="ecommerce_orders">
                <ReferenceManyField reference="ecommerce_orders" target="customer_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="total_amount" label="Tổng tiền" />
                        <TextField source="created_at" label="Ngày tạo" />
                        <EditButton />
                        <ShowButton />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
            <Tab label="Địa chỉ" path="catalog_addresses">
                <ReferenceManyField reference="catalog_addresses" target="customer_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="name" label="Họ tên" />
                        <TextField source="email" label="Email" />
                        <TextField source="phone" label="Số điện thoại" />
                        <TextField source="address" label="Địa chỉ" />
                        <TextField source="created_at" label="Ngày tạo" />
                        <EditButton label="Sửa" />
                        <ShowButton label="Xem" />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);