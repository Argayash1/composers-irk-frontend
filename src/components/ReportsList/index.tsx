import * as React from 'react';
import { List, Datagrid, TextField, ImageField } from 'react-admin';

export const ReportsList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='_id' />
      <TextField source='year' />
      <ImageField source='imageUrl' />
    </Datagrid>
  </List>
);
