import * as React from 'react';
import { List, Datagrid, TextField, ImageField, EditButton, TopToolbar, CreateButton } from 'react-admin';
import { BulkResetViewsButton } from '../BulkResetViewsButton';

export const ReportsList = () => (
  <List
    actions={
      <TopToolbar>
        <CreateButton label='Создать' />
      </TopToolbar>
    }
  >
    <Datagrid rowClick='edit'>
      <TextField source='year' label='Год' />
      <ImageField source='imageUrl' label='Ссылка на изображение' />
      <EditButton label='' />
      <BulkResetViewsButton resource='reports' resourceName='отчёт' />
    </Datagrid>
  </List>
);
