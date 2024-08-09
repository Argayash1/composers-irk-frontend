import * as React from 'react';
import { List, Datagrid, TextField, ImageField, EditButton, DeleteButton } from 'react-admin';

export const NewsList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='title' label='Заголовок' />
      <TextField source='newsText' label='Текст новости' />
      <ImageField source='imageUrl' label='Ссылка на изображение' />
      <TextField source='createdAt' label='Дата создания' />
      <EditButton label='' />
      <DeleteButton label='' />
    </Datagrid>
  </List>
);

export default NewsList;
