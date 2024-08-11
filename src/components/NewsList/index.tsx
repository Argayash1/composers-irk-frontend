import * as React from 'react';
import { List, Datagrid, TextField, ImageField, DateField, EditButton, DeleteButton } from 'react-admin';

export const NewsList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='title' label='Заголовок' />
      <TextField source='newsText' label='Текст' />
      <ImageField source='imageUrl' label='Ссылка на изображение' />
      <DateField source='createdAt' label='Дата создания' />
      <EditButton label='' />
      <DeleteButton label='' />
    </Datagrid>
  </List>
);

export default NewsList;
