import * as React from 'react';
import { List, Datagrid, TextField, ImageField, EditButton, DeleteButton } from 'react-admin';

export const ProjectsList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='title' label='Название проекта' />
      <TextField source='description' label='Описание проекта' />
      <ImageField source='imageUrl' label='Ссылка на изображение' />
      <EditButton label='' />
      <DeleteButton label='' />
    </Datagrid>
  </List>
);
