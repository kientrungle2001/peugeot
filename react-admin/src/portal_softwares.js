import React from 'react';
import {
    Filter, List, Edit, Create,
    Datagrid, TextField, EditButton, 
    DisabledInput, TextInput, BooleanInput,
    SimpleForm, ReferenceInput, SelectInput
} from 'react-admin';

const PortalSoftwareFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const PortalSoftwareList = (props) => (
    <List {...props} filters={<PortalSoftwareFilter />}>

        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="Tiêu đề" />
            <TextField source="name" label="Mã ứng dụng" />
            <TextField source="label" label="Nhãn" />
            <TextField source="created_at" label="Ngày tạo" />
            <TextField source="updated_at" label="Ngày sửa" />
            <EditButton />
        </Datagrid>
    </List>
);

const PortalSoftwareTitle = ({ record }) => {
    return <span>Ứng dụng {record ? `"${record.title}"` : ''}</span>;
};

export const PortalSoftwareEdit = (props) => (
    <Edit title={<PortalSoftwareTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <TextInput source="name" />
            <TextInput source="label" />
            <ReferenceInput label="Parent" source="parent_id" reference="portal_softwares" allowEmpty={true}>
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" />
            <BooleanInput source="status" />
            <BooleanInput source="deleted" />
        </SimpleForm>
    </Edit>
);

export const PortalSoftwareCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="name" />
            <TextInput source="label" />
            <ReferenceInput label="Parent" source="parent_id" reference="portal_softwares" allowEmpty={true}>
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" />
            <BooleanInput source="status" />
            <BooleanInput source="deleted" />
        </SimpleForm>
    </Create>
);