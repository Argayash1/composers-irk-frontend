import * as React from 'react';
import { List, Datagrid, TextField, UrlField } from 'react-admin';

export const VideosList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <UrlField source='iframeUrl' label='Ссылка на видео в YouTube' />
      <TextField source='composer' label='Композитор' />
      <TextField source='title' label='Название произведения' />
      <TextField source='performer' label='Исполнители' />
      <TextField source='about' label='Описание произведения' />
      <TextField source='createdAt' label='Дата создания' />
    </Datagrid>
  </List>
);
