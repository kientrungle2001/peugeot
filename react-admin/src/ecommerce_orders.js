// TODO: Ecommerce Orders
import React from 'react';
import {
    Filter, List, Edit, Create, Show, 
    TabbedShowLayout, Tab,
    Datagrid, EditButton, ShowButton, 
    TextField, ReferenceField, ReferenceManyField, BooleanField,
    SimpleForm, DisabledInput, TextInput, ReferenceInput, SelectInput, BooleanInput
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
            <ReferenceField label="Tên khách hàng" source="customer_id" reference="ecommerce_customers">
                <TextField source="fullname" />
            </ReferenceField>
            <TextField source="total_amount" label="Tổng tiền" />
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

const EcommerceOrderTitle = ({ record }) => {
    return <span>Type {record ? `"${record.title}"` : ''}</span>;
};

export const EcommerceOrderEdit = (props) => (
    <Edit title={<EcommerceOrderTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" className="ra-field-33"/>
            <ReferenceInput label="Khách hàng" source="customer_id" reference="ecommerce_customers" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="fullname" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="discount" className="ra-field-33" label="Giảm giá" />
            <TextInput source="discount_policy_id" className="ra-field-33" label="Chính sách giảm giá" />
            <TextInput source="total_before_discount" className="ra-field-33" label="Tổng trước khi giảm giá" />
            <TextInput source="tax" className="ra-field-33" label="Thuế" />
            <TextInput source="total_before_tax" className="ra-field-33" label="Tổng trước thuế" />
            <TextInput source="total_amount" className="ra-field-33" label="Tổng tiền" />
            <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <BooleanInput source="status" className="ra-field-33" label="Trạng thái" />
            <BooleanInput source="deleted" className="ra-field-33" label="Đã xóa" />
            <div className="clear-both">------------------------------</div>
        </SimpleForm>
    </Edit>
);

export const EcommerceOrderCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Khách hàng" source="customer_id" reference="ecommerce_customers" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="fullname" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="discount" className="ra-field-33" label="Giảm giá" />
            <TextInput source="discount_policy_id" className="ra-field-33" label="Chính sách giảm giá" />
            <TextInput source="total_before_discount" className="ra-field-33" label="Tổng trước khi giảm giá" />
            <TextInput source="tax" className="ra-field-33" label="Thuế" />
            <TextInput source="total_before_tax" className="ra-field-33" label="Tổng trước thuế" />
            <TextInput source="total_amount" className="ra-field-33" label="Tổng tiền" />
            <ReferenceInput label="Website" source="site_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <BooleanInput source="status" className="ra-field-33" label="Trạng thái" />
            <BooleanInput source="deleted" className="ra-field-33" label="Đã xóa" />
            <div className="clear-both">------------------------------</div>
        </SimpleForm>
    </Create>
);

export const EcommerceOrderShow = (props) => (
    <Show title={<EcommerceOrderTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="Cơ bản">
                <TextField source="id" className="ra-field-25" />
                <ReferenceField label="Tên khách hàng" source="customer_id" reference="ecommerce_customers" className="ra-field-25">
                    <TextField source="fullname" />
                </ReferenceField>
                <TextField source="discount" className="ra-field-25" label="Giảm giá" />
                <TextField source="discount_policy_id" className="ra-field-25" label="Chính sách giảm giá" />
                <TextField source="total_before_discount" className="ra-field-25" label="Tổng trước giảm giá" />
                <TextField source="tax" className="ra-field-25" label="Thuế" />
                <TextField source="total_before_tax" className="ra-field-25" label="Tổng trước thuế" />
                <TextField source="total_amount" className="ra-field-25" label="Tổng tiền" />
                <TextField source="created_at" label="Ngày tạo" className="ra-field-25" />
                <TextField source="updated_at" label="Ngày sửa" className="ra-field-25" />
                <ReferenceField label="Ứng dụng" source="software_id" reference="portal_softwares" className="ra-field-25">
                    <TextField source="title" />
                </ReferenceField>
                <ReferenceField label="Trang web" source="site_id" reference="portal_sites" className="ra-field-25">
                    <TextField source="title" />
                </ReferenceField>
            </Tab>
            <Tab label="Đặt hàng" path="ecommerce_order_products">
                <ReferenceManyField reference="ecommerce_order_products" target="order_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="id" />
                        <ReferenceField label="Sản phẩm" source="product_id" reference="ecommerce_products">
                            <TextField source="title" />
                        </ReferenceField>
                        <ReferenceField label="Mã Sản phẩm" source="product_id" reference="ecommerce_products">
                            <TextField source="sku" />
                        </ReferenceField>
                        <TextField source="price" label="Giá" />
                        <TextField source="quantity" label="Số lượng" />
                        <TextField source="total_amount" label="Tổng tiền" />
                        <TextField source="created_at" label="Ngày tạo" />
                        <EditButton label="Sửa" />
                        <ShowButton label="Xem" />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);