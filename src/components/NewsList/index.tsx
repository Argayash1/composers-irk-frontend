import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  DateField,
  EditButton,
  DeleteButton,
  TextInput,
  TopToolbar,
  CreateButton,
  FilterButton,
} from 'react-admin';

const newsFilters = [
  <TextInput label='Заголовок' source='title' />,
  <TextInput label='Текст' source='newsText' />,
  <TextInput label='Дата создания' source='createdAt' />,
];

export const NewsList = () => (
  <List
    filters={newsFilters}
    actions={
      <TopToolbar>
        <FilterButton />
        <CreateButton label='Создать' />
      </TopToolbar>
    }
  >
    <Datagrid rowClick='edit'>
      <TextField source='title' label='Заголовок' />
      <TextField source='newsText' label='Текст' />
      <ImageField source='imageUrl' label='Ссылка на изображение' />
      <DateField source='createdAt' label='Дата создания' />
      <EditButton label='' />
      <DeleteButton label='' mutationMode='pessimistic' />
    </Datagrid>
  </List>
);

export default NewsList;
