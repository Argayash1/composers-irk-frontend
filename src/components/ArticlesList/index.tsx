import * as React from 'react';
import { List, Datagrid, TextField, Pagination, ImageField } from 'react-admin';

type ListProps = {
  pagination: JSX.Element;
};

// @ts-ignore
export const ArticlesList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <ImageField source='imageUrl' label='Ссылка на изображение' />
      <TextField source='createdAt' label='Дата создания' />
      <TextField source='title' label='Заголовок' />
      <TextField source='articleDescription' label='Описание статьи' />
      <TextField source='articleText' label='Текст статьи' />
    </Datagrid>
  </List>
);
