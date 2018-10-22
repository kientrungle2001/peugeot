import React from 'react';
import {
    Filter, List, Edit, Create,
    Datagrid, TextField, EditButton,
    DisabledInput, TextInput, BooleanInput,
    SimpleForm, ReferenceInput, SelectInput
} from 'react-admin';

const PortalSiteFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Tìm kiếm" source="q" alwaysOn />
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
            <EditButton label="Sửa" />
        </Datagrid>
    </List>
);

const PortalSiteTitle = ({ record }) => {
    return <span>Website {record ? `"${record.title}"` : ''}</span>;
};

export const PortalSiteEdit = (props) => (
    <Edit title={<PortalSiteTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" className="ra-field-33" />
            <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="title" className="ra-field-33" />
            <TextInput source="name" className="ra-field-33" />
            <TextInput source="label" className="ra-field-33" />
            <ReferenceInput label="Parent" source="parent_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" className="ra-field-33" />
            <BooleanInput source="status" className="ra-field-33" />
            <BooleanInput source="deleted" className="ra-field-33" />
            <div className="clear-both">------------------------------</div>
        </SimpleForm>
    </Edit>
);

export const PortalSiteCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Ứng dụng" source="software_id" reference="portal_softwares" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="title" className="ra-field-33" />
            <TextInput source="name" className="ra-field-33" />
            <TextInput source="label" className="ra-field-33" />
            <ReferenceInput label="Parent" source="parent_id" reference="portal_sites" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" className="ra-field-33" />
            <BooleanInput source="status" className="ra-field-33" />
            <BooleanInput source="deleted" className="ra-field-33" />
            <div className="clear-both">------------------------------</div>
        </SimpleForm>
    </Create>
);