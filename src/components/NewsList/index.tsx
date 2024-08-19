import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  DateField,
  EditButton,
  TextInput,
  TopToolbar,
  CreateButton,
  FilterButton,
} from 'react-admin';
import { BulkResetViewsButton } from '../BulkResetViewsButton';

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
      <BulkResetViewsButton resource='news' resourceName='новость' />
    </Datagrid>
  </List>
);

export default NewsList;
