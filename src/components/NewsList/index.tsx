import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const NewsList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='_id' />
      <TextField source='title' />
      <TextField source='newsText' />
      <TextField source='imageUrl' />
      <TextField source='createdAt' />
    </Datagrid>
  </List>
);
