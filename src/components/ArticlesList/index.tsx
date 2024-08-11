import * as React from 'react';
import { List, Datagrid, TextField, ImageField, EditButton, DeleteButton, DateField } from 'react-admin';

export const ArticlesList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='title' label='Заголовок' />
      <TextField source='articleDescription' label='Описание статьи' />
      <TextField source='articleText' label='Текст статьи' />
      <ImageField source='imageUrl' label='Ссылка на изображение' />
      <DateField source='createdAt' label='Дата создания' />
      <EditButton label='' />
      <DeleteButton label='' />
    </Datagrid>
  </List>
);
