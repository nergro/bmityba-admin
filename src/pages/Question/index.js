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
} from 'react-admin';

import { SectionTitle } from '../helpers';
import { CreateComponent } from 'Components/CreateForm';

export const List = (props) => {
  return (
    <ListComp exporter={false} {...props}>
      <Datagrid rowClick="show">
        <TextField source="questionEN" label="Question" />
        <TextField source="answerEN" label="answer" />
        <EditButton />
      </Datagrid>
    </ListComp>
  );
};

export const Show = (props) => {
  return (
    <ShowComp title={<SectionTitle action="Benefit" />} {...props}>
      <SimpleShowLayout>
        <TextField source="questionLT" label="Question LT" />
        <TextField source="questionEN" label="Question EN" />
        <TextField source="answerLT" label="Answer LT" />
        <TextField source="answerEN" label="Answer EN" />
      </SimpleShowLayout>
    </ShowComp>
  );
};

export const Create = (props) => {
  return (
    <CreateComponent props={props} redirect="list">
      <SimpleForm redirect="show">
        <TextInput source="questionLT" label="Question LT" validate={required()} />
        <TextInput source="questionEN" label="Question EN" validate={required()} />
        <TextInput source="answerLT" label="Answer LT" validate={required()} multiline />
        <TextInput source="answerEN" label="Answer EN" validate={required()} multiline />
      </SimpleForm>
    </CreateComponent>
  );
};

export const Edit = (props) => {
  return (
    <EditComp {...props} title={<SectionTitle action="Cabin" />}>
      <SimpleForm redirect="show">
        <TextInput source="questionLT" label="Question LT" validate={required()} />
        <TextInput source="questionEN" label="Question EN" validate={required()} />
        <TextInput source="answerLT" label="Answer LT" validate={required()} multiline />
        <TextInput source="answerEN" label="Answer EN" validate={required()} multiline />
      </SimpleForm>
    </EditComp>
  );
};
