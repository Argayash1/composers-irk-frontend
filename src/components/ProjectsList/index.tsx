import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const ProjectsList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='_id' />
      <TextField source='imageUrl' />
      <TextField source='title' />
      <TextField source='description' />
    </Datagrid>
  </List>
);
