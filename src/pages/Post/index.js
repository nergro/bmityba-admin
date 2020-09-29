import React from 'react';
import {
  List as ListComp,
  Show as ShowComp,
  Datagrid,
  TextField,
  SimpleShowLayout,
  TextInput,
  SimpleForm,
  required,
  RichTextField,
  DateField,
  Edit as EditComp,
} from 'react-admin';

import { SectionTitle } from '../helpers';
import { CreateComponent } from 'Components/CreateForm';

import { EditorInput } from 'Components/EditorInput';

export const List = (props) => {
  return (
    <ListComp exporter={false} {...props}>
      <Datagrid rowClick="show">
        <TextField source="title" label="Title" />
        <TextField source="category" label="Category" />
        <DateField source="date" label="Date" locales="lt-LT" />
        <RichTextField source="content" label="Content" />
      </Datagrid>
    </ListComp>
  );
};

export const Show = (props) => {
  return (
    <ShowComp title={<SectionTitle action="Newsletter" />} {...props}>
      <SimpleShowLayout>
        <TextField source="title" label="Title" />
        <TextField source="category" label="Category" />
        <DateField source="date" label="Date" locales="lt-LT" />
        <RichTextField source="content" label="Content" />
      </SimpleShowLayout>
    </ShowComp>
  );
};

export const Create = (props) => {
  return (
    <CreateComponent props={props} redirect="list">
      <SimpleForm redirect="show">
        <TextInput source="title" label="Title" validate={required()} />
        <TextInput source="category" label="Category" validate={required()} />
        <EditorInput name="content" source="content" />
      </SimpleForm>
    </CreateComponent>
  );
};

export const Edit = (props) => {
  return (
    <EditComp {...props} title={<SectionTitle action="Post" />}>
      <SimpleForm redirect="show">
        <TextInput source="title" label="Title" validate={required()} />
        <TextInput source="category" label="Category" validate={required()} />
        <EditorInput name="content" source="content" />
      </SimpleForm>
    </EditComp>
  );
};
