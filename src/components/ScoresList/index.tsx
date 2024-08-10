import * as React from 'react';
import { List, Datagrid, TextField, UrlField, EditButton, DeleteButton } from 'react-admin';

export const ScoresList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <UrlField source='url' label='Ссылка на ноты' />
      <TextField source='title' label='Название произведения' />
      <TextField source='composer' label='Композитор' />
      <TextField source='category' label='Категория' />
      <EditButton label='' />
      <DeleteButton label='' />
    </Datagrid>
  </List>
);
