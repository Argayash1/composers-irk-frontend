import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const OurHistoryList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='_id' />
      <TextField source='text' />
    </Datagrid>
  </List>
);
