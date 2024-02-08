import * as React from 'react';
import { List, Datagrid, TextField, UrlField } from 'react-admin';

export const VideosList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='_id' />
      <UrlField source='iframeUrl' />
      <TextField source='composer' />
      <TextField source='title' />
      <TextField source='performer' />
      <TextField source='createdAt' />
      <TextField source='about' />
    </Datagrid>
  </List>
);
