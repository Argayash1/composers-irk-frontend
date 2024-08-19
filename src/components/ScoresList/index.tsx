import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  UrlField,
  EditButton,
  TopToolbar,
  FilterButton,
  CreateButton,
  TextInput,
} from 'react-admin';
import { BulkResetViewsButton } from '../BulkResetViewsButton';

const scoreFilters = [
  <TextInput label='Композитор' source='composer' />,
  <TextInput label='Название произведения' source='title' />,
];

export const ScoresList = () => (
  <List
    filters={scoreFilters}
    actions={
      <TopToolbar>
        <FilterButton />
        <CreateButton label='Создать' />
      </TopToolbar>
    }
  >
    <Datagrid rowClick='edit'>
      <TextField source='composer' label='Композитор' />
      <TextField source='title' label='Название произведения' />
      <UrlField source='url' label='Ссылка на ноты' />
      <TextField source='category' label='Категория' />
      <EditButton label='' />
      <BulkResetViewsButton resource='scores' resourceName='ноты' />
    </Datagrid>
  </List>
);
