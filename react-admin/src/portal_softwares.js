import React from 'react';
import {
    Filter, List, Edit, Create,
    Datagrid, TextField, EditButton, 
    DisabledInput, TextInput, BooleanInput,
    SimpleForm, ReferenceInput, SelectInput
} from 'react-admin';

const PortalSoftwareFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Tìm kiếm" source="q" alwaysOn />
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
            <EditButton label="Sửa" />
        </Datagrid>
    </List>
);

const PortalSoftwareTitle = ({ record }) => {
    return <span>Ứng dụng {record ? `"${record.title}"` : ''}</span>;
};

export const PortalSoftwareEdit = (props) => (
    <Edit title={<PortalSoftwareTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" className="ra-field-33" />
            <TextInput source="title" className="ra-field-33" />
            <TextInput source="name" className="ra-field-33" />
            <TextInput source="label" className="ra-field-33" />
            <ReferenceInput label="Parent" source="parent_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" className="ra-field-33" />
            <BooleanInput source="status" className="ra-field-33" />
            <BooleanInput source="deleted" className="ra-field-33" />
            <div className="clear-both">------------------------------</div>
        </SimpleForm>
    </Edit>
);

export const PortalSoftwareCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" className="ra-field-33" />
            <TextInput source="name" className="ra-field-33" />
            <TextInput source="label" className="ra-field-33" />
            <ReferenceInput label="Ứng dụng cha" source="parent_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" className="ra-field-33" />
            <BooleanInput source="status" className="ra-field-33" />
            <BooleanInput source="deleted" className="ra-field-33" />
            <div className="clear-both">------------------------------</div>
        </SimpleForm>
    </Create>
);