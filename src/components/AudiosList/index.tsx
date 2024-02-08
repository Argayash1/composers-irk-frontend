import * as React from 'react';
import { List, Datagrid, TextField, UrlField } from 'react-admin';

export const AudiosList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <TextField source='_id' />
      <UrlField source='audioUrl' label='Ссылка на аудиофайл' />
      <TextField source='composer' label='Композитор' />
      <TextField source='title' label='Название' />
      <TextField source='performer' label='Исполнитель' />
    </Datagrid>
  </List>
);
