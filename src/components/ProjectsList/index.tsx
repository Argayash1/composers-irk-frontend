import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  EditButton,
  DeleteButton,
  TextInput,
  TopToolbar,
  FilterButton,
  CreateButton,
} from 'react-admin';

const projectFilters = [
  <TextInput label='Заголовок' source='title' />,
  <TextInput label='Описание проекта' source='description' />,
];

export const ProjectsList = () => (
  <List
    filters={projectFilters}
    actions={
      <TopToolbar>
        <FilterButton />
        <CreateButton label='Создать' />
      </TopToolbar>
    }
  >
    <Datagrid rowClick='edit'>
      <TextField source='title' label='Название проекта' />
      <TextField source='description' label='Описание проекта' />
      <ImageField source='imageUrl' label='Ссылка на изображение' />
      <EditButton label='' />
      <DeleteButton label='' mutationMode='pessimistic' />
    </Datagrid>
  </List>
);
