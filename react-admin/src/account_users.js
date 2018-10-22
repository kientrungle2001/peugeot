import React from 'react';
import {
    Filter, List, Edit, Create, Show,
    Datagrid, EditButton, ShowButton,
    TextField, ReferenceField, BooleanField,
    SimpleShowLayout,
    SimpleForm, DisabledInput, TextInput, ReferenceInput, SelectInput, BooleanInput
} from 'react-admin';

const AccountUserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Tìm kiếm" source="q" alwaysOn />
        <TextInput label="Ứng dụng" source="software_id" />
        <TextInput label="Website" source="site_id" />
    </Filter>
);

export const AccountUserList = (props) => (
    <List {...props} filters={<AccountUserFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" label="Tên đăng nhập" />
            <TextField source="name" label="Họ và tên" />
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

const AccountUserTitle = ({ record }) => {
    return <span>Người dùng {record ? `"${record.title}"` : ''}</span>;
};

export const AccountUserEdit = (props) => (
    <Edit title={<AccountUserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" className="ra-field-33" />
            <TextInput source="username" label="Tên đăng nhập" className="ra-field-33" />
            <TextInput source="password" label="Mật khẩu" className="ra-field-33" />
            <TextInput source="name" label="Họ và tên" className="ra-field-33" />
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

export const AccountUserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" label="Tên đăng nhập" className="ra-field-33" />
            <TextInput source="password" label="Mật khẩu" className="ra-field-33" />
            <TextInput source="name" label="Họ và tên" className="ra-field-33" />
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

export const AccountUserShow = (props) => (
    <Show title={<AccountUserTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" className="ra-field-33" />
            <TextField source="username" label="Tên đăng nhập" className="ra-field-33" />
            <TextField source="name" label="Họ và tên" className="ra-field-33" />
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