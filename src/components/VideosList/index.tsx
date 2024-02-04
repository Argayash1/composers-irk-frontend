import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const VideosList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='_id' />
      <TextField source='iframeUrl' />
      <TextField source='composer' />
      <TextField source='title' />
      <TextField source='performer' />
      <TextField source='createdAt' />
      <TextField source='about' />
    </Datagrid>
  </List>
);
