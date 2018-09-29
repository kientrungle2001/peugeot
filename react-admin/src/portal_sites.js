import React from 'react';
import {
    Filter, List, Edit, Create,
    Datagrid, TextField, EditButton,
    DisabledInput, TextInput, BooleanInput,
    SimpleForm, ReferenceInput, SelectInput
} from 'react-admin';

const PortalSiteFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const PortalSiteList = (props) => (
    <List {...props} filters={<PortalSiteFilter />}>

        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="Tiêu đề" />
            <TextField source="name" label="Mã website" />
            <TextField source="label" label="Nhãn" />
            <TextField source="software_id" label="Ứng dụng" />
            <TextField source="created_at" label="Ngày tạo" />
            <TextField source="updated_at" label="Ngày sửa" />
            <EditButton />
        </Datagrid>
    </List>
);

const PortalSiteTitle = ({ record }) => {
    return <span>Website {record ? `"${record.title}"` : ''}</span>;
};

export const PortalSiteEdit = (props) => (
    <Edit title={<PortalSiteTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput source="name" />
            <TextInput source="label" />
            <ReferenceInput label="Parent" source="parent_id" reference="portal_sites" allowEmpty={true}>
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" />
            <BooleanInput source="status" />
            <BooleanInput source="deleted" />
        </SimpleForm>
    </Edit>
);

export const PortalSiteCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true}>
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput source="name" />
            <TextInput source="label" />
            <ReferenceInput label="Parent" source="parent_id" reference="portal_sites" allowEmpty={true}>
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" />
            <BooleanInput source="status" />
            <BooleanInput source="deleted" />
        </SimpleForm>
    </Create>
);