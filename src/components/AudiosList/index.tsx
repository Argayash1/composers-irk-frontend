import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const AudiosList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='_id' />
      <TextField source='audioUrl' />
      <TextField source='composer' />
      <TextField source='title' />
      <TextField source='performer' />
    </Datagrid>
  </List>
);
