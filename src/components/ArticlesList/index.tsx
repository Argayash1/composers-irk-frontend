import * as React from 'react';
import { List, Datagrid, TextField, Pagination } from 'react-admin';

type ListProps = {
  pagination: JSX.Element;
};

// @ts-ignore
export const ArticlesList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='_id' />
      <TextField source='imageUrl' />
      <TextField source='createdAt' />
      <TextField source='title' />
      <TextField source='articleDescription' />
      <TextField source='articleText' />
    </Datagrid>
  </List>
);
