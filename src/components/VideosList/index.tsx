import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  UrlField,
  EditButton,
  DateField,
  TextInput,
  TopToolbar,
  FilterButton,
  CreateButton,
} from 'react-admin';
import { BulkResetViewsButton } from '../BulkResetViewsButton';

const videoFilters = [
  <TextInput label='Композитор' source='composer' />,
  <TextInput label='Название произведения' source='title' />,
];

export const VideosList = () => (
  <List
    filters={videoFilters}
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
      <TextField source='performer' label='Исполнители' />
      <TextField source='about' label='Описание произведения' />
      <UrlField source='iframeUrl' label='Ссылка на видео в YouTube' />
      <DateField source='createdAt' label='Дата создания' />
      <EditButton label='' />
      <BulkResetViewsButton resource='videos' resourceName='видеозапись' />
    </Datagrid>
  </List>
);
