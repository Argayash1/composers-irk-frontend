import * as React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

export const OurHistoryList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='text' label='Текст' />
      <EditButton label='' />
      <DeleteButton label='' />
    </Datagrid>
  </List>
);
