import * as React from 'react';
import { List, Datagrid, TextField, UrlField } from 'react-admin';

export const ScoresList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='_id' />
      <UrlField source='url' />
      <TextField source='title' />
      <TextField source='composer' />
    </Datagrid>
  </List>
);
