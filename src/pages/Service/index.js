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
  NumberField,
  NumberInput,
  required,
  Edit as EditComp,
  ImageField,
  ImageInput,
} from 'react-admin';
import { MultiTextField } from 'Components/MultiTextField';

import { SectionTitle } from '../helpers';
import { CreateComponent } from 'Components/CreateForm';
import styled from 'styled-components';

const StyledHR = styled.hr`
  width: 100% !important;
  background: #aaaaaa;
`;

const StyledP = styled.p`
  font-weight: 600;
`;

export const List = (props) => {
  return (
    <ListComp exporter={false} {...props}>
      <Datagrid rowClick="show">
        <TextField source="nameEN" label="Name" />
        <NumberField source="price" />
        <EditButton />
      </Datagrid>
    </ListComp>
  );
};

export const Show = (props) => {
  return (
    <ShowComp title={<SectionTitle action="Service" />} {...props}>
      <SimpleShowLayout>
        <ImageField source="image.imageUrl" title="image" label="Image" />
        <TextField source="nameLT" label="Name LT" />
        <TextField source="nameEN" label="Name EN" />
        <MultiTextField source="descriptionLT" label="Description LT" />
        <MultiTextField source="descriptionEN" label="Description EN" />
        <NumberField source="price" />
        <MultiTextField source="priceDescriptionLT" label="Price description LT" />
        <MultiTextField source="priceDescriptionEN" label="Price description EN" />
        <StyledHR />
        <h2>Benefits</h2>
        <TextField source="benefitsTitleLT" label="Benefits Title LT" />
        <TextField source="benefitsTitleEN" label="Benefits Title EN" />
        <MultiTextField source="benefitsDescriptionLT" label="Benefits description LT" />
        <MultiTextField source="benefitsDescriptionEN" label="Benefits description EN" />
        <StyledP>Benefit 1</StyledP>
        <TextField source="benefits.benefit1NameLT" label="Name LT" />
        <TextField source="benefits.benefit1NameEN" label="Name EN" />
        <TextField source="benefits.benefit1DescriptionLT" label="Description LT" multiline />
        <TextField source="benefits.benefit1DescriptionEN" label="Description EN" multiline />
        <StyledP>Benefit 2</StyledP>
        <TextField source="benefits.benefit2NameLT" label="Name LT" />
        <TextField source="benefits.benefit2NameEN" label="Name EN" />
        <TextField source="benefits.benefit2DescriptionLT" label="Description LT" multiline />
        <TextField source="benefits.benefit2DescriptionEN" label="Description EN" multiline />
        <StyledP>Benefit 3</StyledP>
        <TextField source="benefits.benefit3NameLT" label="Name LT" />
        <TextField source="benefits.benefit3NameEN" label="Name EN" />
        <TextField source="benefits.benefit3DescriptionLT" label="Description LT" multiline />
        <TextField source="benefits.benefit3DescriptionEN" label="Description EN" multiline />
        <StyledP>Benefit 4</StyledP>
        <TextField source="benefits.benefit4NameLT" label="Name LT" />
        <TextField source="benefits.benefit4NameEN" label="Name EN" />
        <TextField source="benefits.benefit4DescriptionLT" label="Description LT" multiline />
        <TextField source="benefits.benefit4DescriptionEN" label="Description EN" multiline />
      </SimpleShowLayout>
    </ShowComp>
  );
};

export const Create = (props) => {
  return (
    <CreateComponent props={props} redirect="list">
      <SimpleForm redirect="show">
        <ImageInput source="image" label="Upload image" accept="image/*" validate={required()}>
          <ImageField source="url" title="Image" />
        </ImageInput>
        <TextInput source="nameLT" label="Name LT" validate={required()} />
        <TextInput source="nameEN" label="Name EN" validate={required()} />
        <TextInput source="descriptionLT" label="Description LT" validate={required()} multiline />
        <TextInput source="descriptionEN" label="Description EN" validate={required()} multiline />
        <NumberInput source="price" step={1} validate={required()} />
        <p>Use / for multiline</p>
        <TextInput
          source="priceDescriptionLT"
          label="Price description LT"
          validate={required()}
          multiline
        />
        <TextInput
          source="priceDescriptionEN"
          label="Price description EN"
          validate={required()}
          multiline
        />
        <StyledHR />
        <h2>Benefits</h2>
        <TextInput source="benefitsTitleLT" label="Benefits Title LT" validate={required()} />
        <TextInput source="benefitsTitleEN" label="Benefits Title EN" validate={required()} />
        <TextInput
          source="benefitsDescriptionLT"
          label="Benefits description LT"
          validate={required()}
          multiline
        />
        <TextInput
          source="benefitsDescriptionEN"
          label="Benefits description EN"
          validate={required()}
          multiline
        />
        <StyledP>Benefit 1</StyledP>
        <TextInput source="benefits.benefit1NameLT" label="Name LT" />
        <TextInput source="benefits.benefit1NameEN" label="Name EN" />
        <TextInput source="benefits.benefit1DescriptionLT" label="Description LT" multiline />
        <TextInput source="benefits.benefit1DescriptionEN" label="Description EN" multiline />
        <StyledP>Benefit 2</StyledP>
        <TextInput source="benefits.benefit2NameLT" label="Name LT" />
        <TextInput source="benefits.benefit2NameEN" label="Name EN" />
        <TextInput source="benefits.benefit2DescriptionLT" label="Description LT" multiline />
        <TextInput source="benefits.benefit2DescriptionEN" label="Description EN" multiline />
        <StyledP>Benefit 3</StyledP>
        <TextInput source="benefits.benefit3NameLT" label="Name LT" />
        <TextInput source="benefits.benefit3NameEN" label="Name EN" />
        <TextInput source="benefits.benefit3DescriptionLT" label="Description LT" multiline />
        <TextInput source="benefits.benefit3DescriptionEN" label="Description EN" multiline />
        <StyledP>Benefit 4</StyledP>
        <TextInput source="benefits.benefit4NameLT" label="Name LT" />
        <TextInput source="benefits.benefit4NameEN" label="Name EN" />
        <TextInput source="benefits.benefit4DescriptionLT" label="Description LT" multiline />
        <TextInput source="benefits.benefit4DescriptionEN" label="Description EN" multiline />
      </SimpleForm>
    </CreateComponent>
  );
};

export const Edit = (props) => {
  return (
    <EditComp {...props} title={<SectionTitle action="Service" />}>
      <SimpleForm redirect="show">
        <ImageInput source="image" label="Upload image" accept="image/*" validate={required()}>
          <ImageField source="imageUrl" title="Image" />
        </ImageInput>
        <TextInput source="nameLT" label="Name LT" validate={required()} />
        <TextInput source="nameEN" label="Name EN" validate={required()} />
        <TextInput source="descriptionLT" label="Description LT" validate={required()} multiline />
        <TextInput source="descriptionEN" label="Description EN" validate={required()} multiline />
        <NumberInput source="price" step={1} validate={required()} />
        <p>Use / for multiline</p>
        <TextInput
          source="priceDescriptionLT"
          label="Price description LT"
          validate={required()}
          multiline
        />
        <TextInput
          source="priceDescriptionEN"
          label="Price description EN"
          validate={required()}
          multiline
        />
        <StyledHR />
        <h2>Benefits</h2>
        <TextInput source="benefitsTitleLT" label="Benefits Title LT" validate={required()} />
        <TextInput source="benefitsTitleEN" label="Benefits Title EN" validate={required()} />
        <TextInput
          source="benefitsDescriptionLT"
          label="Benefits description LT"
          validate={required()}
          multiline
        />
        <TextInput
          source="benefitsDescriptionEN"
          label="Benefits description EN"
          validate={required()}
          multiline
        />
        <StyledP>Benefit 1</StyledP>
        <TextInput source="benefits.benefit1NameLT" label="Name LT" />
        <TextInput source="benefits.benefit1NameEN" label="Name EN" />
        <TextInput source="benefits.benefit1DescriptionLT" label="Description LT" multiline />
        <TextInput source="benefits.benefit1DescriptionEN" label="Description EN" multiline />
        <StyledP>Benefit 2</StyledP>
        <TextInput source="benefits.benefit2NameLT" label="Name LT" />
        <TextInput source="benefits.benefit2NameEN" label="Name EN" />
        <TextInput source="benefits.benefit2DescriptionLT" label="Description LT" multiline />
        <TextInput source="benefits.benefit2DescriptionEN" label="Description EN" multiline />
        <StyledP>Benefit 3</StyledP>
        <TextInput source="benefits.benefit3NameLT" label="Name LT" />
        <TextInput source="benefits.benefit3NameEN" label="Name EN" />
        <TextInput source="benefits.benefit3DescriptionLT" label="Description LT" multiline />
        <TextInput source="benefits.benefit3DescriptionEN" label="Description EN" multiline />
        <StyledP>Benefit 4</StyledP>
        <TextInput source="benefits.benefit4NameLT" label="Name LT" />
        <TextInput source="benefits.benefit4NameEN" label="Name EN" />
        <TextInput source="benefits.benefit4DescriptionLT" label="Description LT" multiline />
        <TextInput source="benefits.benefit4DescriptionEN" label="Description EN" multiline />
      </SimpleForm>
    </EditComp>
  );
};
