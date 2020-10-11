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
  ImageField,
  ImageInput,
  ReferenceInput,
  SelectInput,
  ReferenceField,
  Edit as EditComp,
} from 'react-admin';

import { SectionTitle } from '../helpers';
import { CreateComponent } from 'Components/CreateForm';

import { EditorInput } from 'Components/EditorInput';

export const List = (props) => {
  return (
    <ListComp exporter={false} {...props}>
      <Datagrid rowClick="show">
        <TextField source="titleEN" label="Title" />
        <ReferenceField label="Category" source="category" reference="post-category">
          <TextField source="nameEN" />
        </ReferenceField>
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
        <ImageField source="image.imageUrl" title="image" label="Image" />
        <TextField source="titleLT" label="Title LT" />
        <TextField source="titleEN" label="Title EN" />
        <ReferenceField label="Category" source="category" reference="post-category">
          <TextField source="nameEN" />
        </ReferenceField>
        <DateField source="date" label="Date" locales="lt-LT" />
        <RichTextField source="contentLT" label="ContentLT" />
        <RichTextField source="contentEN" label="ContentEN" />
      </SimpleShowLayout>
    </ShowComp>
  );
};

export const Create = (props) => {
  return (
    <CreateComponent props={props} redirect="list">
      <SimpleForm redirect="show">
        <ImageInput source="image" label="Upload image" accept="image/*" validate={required()}>
          <ImageField source="imageUrl" title="Image" />
        </ImageInput>
        <ReferenceInput
          label="Category"
          source="category"
          reference="post-category"
          validate={required()}
        >
          <SelectInput optionText="nameEN" />
        </ReferenceInput>
        <TextInput source="titleLT" label="TitleLT" validate={required()} />
        <TextInput source="titleEN" label="TitleEN" validate={required()} />
        <EditorInput name="contentLT" source="contentLT" />
        <EditorInput name="contentEN" source="contentEN" />
      </SimpleForm>
    </CreateComponent>
  );
};

export const Edit = (props) => {
  return (
    <EditComp {...props} title={<SectionTitle action="Post" />}>
      <SimpleForm redirect="list">
        <ImageInput source="image" label="Upload image" accept="image/*" validate={required()}>
          <ImageField source="imageUrl" title="Image" />
        </ImageInput>
        <ReferenceInput
          label="Category"
          source="category"
          reference="post-category"
          validate={required()}
        >
          <SelectInput optionText="nameEN" />
        </ReferenceInput>
        <TextInput source="titleLT" label="TitleLT" validate={required()} />
        <TextInput source="titleEN" label="TitleEN" validate={required()} />
        <EditorInput name="contentLT" source="contentLT" />
        <EditorInput name="contentEN" source="contentEN" />
      </SimpleForm>
    </EditComp>
  );
};
