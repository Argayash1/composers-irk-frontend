import * as React from 'react';
import { List, Datagrid, TextField, ImageField } from 'react-admin';

export const MembersList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='_id' />
      <ImageField source='imageUrl' />
      <TextField source='surname' />
      <TextField source='name' />
      <TextField source='patronymic' />
      <TextField source='profession' />
      <TextField source='biography' />
      <TextField source='shortBiography' />
      <TextField source='works' />
      <TextField source='awards' />
      <TextField source='competitions' />
      <TextField source='links' />
    </Datagrid>
  </List>
);
