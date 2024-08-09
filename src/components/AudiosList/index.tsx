import * as React from 'react';
import { List, Datagrid, TextField, UrlField } from 'react-admin';

export const AudiosList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <UrlField source='audioUrl' label='Ссылка на аудиофайл' />
      <TextField source='composer' label='Композитор' />
      <TextField source='title' label='Название произведения' />
      <TextField source='performer' label='Исполнитель' />
    </Datagrid>
  </List>
);
