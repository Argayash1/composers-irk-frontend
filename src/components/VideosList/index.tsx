import * as React from 'react';
import { List, Datagrid, TextField, UrlField, EditButton, DeleteButton, DateField } from 'react-admin';

export const VideosList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <UrlField source='iframeUrl' label='Ссылка на видео в YouTube' />
      <TextField source='composer' label='Композитор' />
      <TextField source='title' label='Название произведения' />
      <TextField source='performer' label='Исполнители' />
      <TextField source='about' label='Описание произведения' />
      <DateField source='createdAt' label='Дата создания' />
      <EditButton label='' />
      <DeleteButton label='' />
    </Datagrid>
  </List>
);
