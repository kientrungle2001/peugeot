import React from 'react';
import {
    Filter, List, Edit, Create, Show,
    Datagrid, EditButton, ShowButton, 
    TextField, ReferenceField, BooleanField, 
    SimpleShowLayout,
    SimpleForm, DisabledInput, TextInput, ReferenceInput, SelectInput, BooleanInput
} from 'react-admin';

const CatalogTypeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Tìm kiếm" source="q" alwaysOn />
        <TextInput label="Ứng dụng" source="software_id" />
        <TextInput label="Website" source="site_id" />
        <TextInput label="Danh mục" source="category_id" />
    </Filter>
);

export const CatalogTypeList = (props) => (
    <List {...props} filters={<CatalogTypeFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="scope" label="Phạm vi" />
            <TextField source="name" label="Kiểu" />
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

const CatalogTypeTitle = ({ record }) => {
    return <span>Type {record ? `"${record.title}"` : ''}</span>;
};

export const CatalogTypeEdit = (props) => (
    <Edit title={<CatalogTypeTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" className="ra-field-33" />
            <TextInput source="scope" label="Phạm vi" className="ra-field-33" />
            <TextInput source="name" label="Tên kiểu" className="ra-field-33" />
            <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Kiểu cha" source="parent_id" reference="catalog_types" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" className="ra-field-33" />
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

export const CatalogTypeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="scope" label="Phạm vi" className="ra-field-33" />
            <TextInput source="name" label="Tên kiểu" className="ra-field-33" />
            <ReferenceInput label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="title" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <ReferenceInput label="Kiểu cha" source="parent_id" reference="catalog_types" allowEmpty={true} className="ra-field-33">
                <SelectInput optionText="name" optionValue="id" allowEmpty={true} />
            </ReferenceInput>
            <TextInput source="parent_path" className="ra-field-33" />
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

export const CatalogTypeShow = (props) => (
    <Show title={<CatalogTypeTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" className="ra-field-33" />
            <TextField source="scope" label="Phạm vi" className="ra-field-33" />
            <TextField source="name" label="Tên kiểu" className="ra-field-33" />
            <ReferenceField label="Danh mục" source="category_id" reference="catalog_categories" allowEmpty={true} className="ra-field-33">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="Kiểu cha" source="parent_id" reference="catalog_types" allowEmpty={true} className="ra-field-33">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="parent_path" className="ra-field-33" />
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