import * as React from 'react';
import { List, Datagrid, TextField, EditButton, TopToolbar } from 'react-admin';

export const OurHistoryList = () => (
  <List actions={<TopToolbar></TopToolbar>}>
    <Datagrid rowClick='edit'>
      <TextField source='text' label='Текст' />
      <EditButton label='' />
    </Datagrid>
  </List>
);
