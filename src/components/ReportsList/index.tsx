import * as React from 'react';
import { List, Datagrid, TextField, ImageField, EditButton, DeleteButton, TopToolbar, CreateButton } from 'react-admin';

export const ReportsList = () => (
  <List
    actions={
      <TopToolbar>
        <CreateButton label='Создать' />
      </TopToolbar>
    }
  >
    <Datagrid rowClick='edit'>
      <TextField source='year' label='Год' />
      <ImageField source='imageUrl' label='Ссылка на изображение' />
      <EditButton label='' />
      <DeleteButton label='' mutationMode='pessimistic' />
    </Datagrid>
  </List>
);
