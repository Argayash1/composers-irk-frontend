import * as React from 'react';
import { List, Datagrid, TextField, ImageField, EditButton, DeleteButton } from 'react-admin';

export const ReportsList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='year' label='Год' />
      <ImageField source='imageUrl' label='Ссылка на изображение' />
      <EditButton label='' />
      <DeleteButton label='' />
    </Datagrid>
  </List>
);
