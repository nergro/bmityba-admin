/* eslint-disable no-multi-str */
import React from 'react';
import styled from 'styled-components';
import { useInput } from 'react-admin';
import { Editor as EditorComponent } from '@tinymce/tinymce-react';

const Wrapper = styled.div``;

export const EditorInput = (props) => {
  const {
    input: { name, onChange, value },
  } = useInput(props);

  const onEditorChange = (value) => {
    onChange(value);
  };

  return (
    <Wrapper>
      <p style={{ fontFamily: 'Roboto', color: '#4f4f4f' }}>
        {props.source.charAt(0).toUpperCase() + props.source.slice(1)} *
      </p>
      <EditorComponent
        source={props.source}
        name={name}
        apiKey="wjcnoc4pj4qwxw1no6wu940iqxluebqecioxyjh3bx9oc4ep"
        initialValue={value}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
        }}
        onEditorChange={(value) => onEditorChange(value)}
      />
    </Wrapper>
  );
};
