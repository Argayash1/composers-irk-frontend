import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const ScoresList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='_id' />
      <TextField source='url' />
      <TextField source='title' />
      <TextField source='composer' />
    </Datagrid>
  </List>
);
