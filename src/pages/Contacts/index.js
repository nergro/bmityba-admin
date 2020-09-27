import React from 'react';
import {
  List as ListComp,
  Show as ShowComp,
  Datagrid,
  TextField,
  SimpleShowLayout,
  EditButton,
  TextInput,
  SimpleForm,
  required,
  Edit as EditComp,
  Toolbar,
  SaveButton,
} from 'react-admin';

import { SectionTitle } from '../helpers';
import { CreateComponent } from 'Components/CreateForm';

export const List = (props) => {
  return (
    <ListComp exporter={false} bulkActionButtons={false} {...props}>
      <Datagrid rowClick="show">
        <TextField source="phone" label="Phone" />
        <TextField source="email" label="Email" />
        <TextField source="locationLT" label="Location LT" />
        <TextField source="locationEN" label="Location EN" />
        <EditButton />
      </Datagrid>
    </ListComp>
  );
};

export const Show = (props) => {
  return (
    <ShowComp title={<SectionTitle action="Benefit" />} {...props}>
      <SimpleShowLayout>
        <TextField source="phone" label="Phone" />
        <TextField source="email" label="Email" />
        <TextField source="locationLT" label="Location LT" />
        <TextField source="locationEN" label="Location EN" />
      </SimpleShowLayout>
    </ShowComp>
  );
};

export const Create = (props) => {
  return (
    <CreateComponent props={props} redirect="list">
      <SimpleForm redirect="show">
        <TextInput source="phone" label="Phone" validate={required()} />
        <TextInput source="email" label="Email" validate={required()} />
        <TextInput source="locationLT" label="Location LT" validate={required()} />
        <TextInput source="locationEN" label="Location EN" validate={required()} />
      </SimpleForm>
    </CreateComponent>
  );
};

const PostEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

export const Edit = (props) => {
  return (
    <EditComp {...props} title={<SectionTitle action="Cabin" />}>
      <SimpleForm redirect="show" toolbar={<PostEditToolbar />}>
        <TextInput source="phone" label="Phone" validate={required()} />
        <TextInput source="email" label="Email" validate={required()} />
        <TextInput source="locationLT" label="Location LT" validate={required()} />
        <TextInput source="locationEN" label="Location EN" validate={required()} />
      </SimpleForm>
    </EditComp>
  );
};
