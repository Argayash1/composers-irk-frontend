import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const ReportsList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='_id' />
      <TextField source='year' />
      <TextField source='imageUrl' />
    </Datagrid>
  </List>
);
