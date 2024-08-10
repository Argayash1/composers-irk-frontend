import * as React from 'react';
import { List, Datagrid, TextField, ImageField, EditButton, DeleteButton } from 'react-admin';
import { Pagination } from 'react-admin';

const PostPagination = () => <Pagination rowsPerPageOptions={[5, 10, 15, 20]} />;

export const ProjectsList = () => (
  <List pagination={<PostPagination />}>
    <Datagrid rowClick='edit'>
      <ImageField source='imageUrl' label='Ссылка на изображение' />
      <TextField source='title' label='Название проекта' />
      <TextField source='description' label='Описание проекта' />
      <EditButton label='' />
      <DeleteButton label='' />
    </Datagrid>
  </List>
);
