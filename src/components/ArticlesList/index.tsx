import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  EditButton,
  DeleteButton,
  DateField,
  TextInput,
  TopToolbar,
  FilterButton,
  CreateButton,
} from 'react-admin';

const articleFilters = [
  <TextInput label='Заголовок' source='title' />,
  <TextInput label='Описание статьи' source='articleDescription' />,
  <TextInput label='Описание статьи' source='articleText' />,
  <TextInput label='Дата создания' source='createdAt' />,
];

export const ArticlesList = () => (
  <List
    filters={articleFilters}
    actions={
      <TopToolbar>
        <FilterButton />
        <CreateButton label='Создать' />
      </TopToolbar>
    }
  >
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
