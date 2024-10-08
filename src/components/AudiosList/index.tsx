import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  UrlField,
  EditButton,
  TextInput,
  TopToolbar,
  FilterButton,
  CreateButton,
} from 'react-admin';
import { BulkResetViewsButton } from '../BulkResetViewsButton';

const audioFilters = [
  <TextInput label='Композитор' source='composer' />,
  <TextInput label='Название произведения' source='title' />,
  <TextInput label='Исполнитель' source='performer' />,
];

export const AudiosList = () => (
  <List
    filters={audioFilters}
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
      <TextField source='performer' label='Исполнитель' />
      <UrlField source='audioUrl' label='Ссылка на аудиофайл' />
      <EditButton label='' />
      <BulkResetViewsButton resource='audios' resourceName='аудиозапись' />
    </Datagrid>
  </List>
);
