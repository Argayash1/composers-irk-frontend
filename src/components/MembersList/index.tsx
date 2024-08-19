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

const memberFilters = [
  <TextInput label='Фамилия' source='surname' />,
  <TextInput label='Имя' source='name' />,
  <TextInput label='Отчество' source='patronymic' />,
  <TextInput label='Професссия' source='profession' />,
];

export const MembersList = () => (
  <List
    filters={memberFilters}
    actions={
      <TopToolbar>
        <FilterButton />
        <CreateButton label='Создать' />
      </TopToolbar>
    }
  >
    <Datagrid rowClick='edit'>
      <TextField source='surname' label='Фамилия' />
      <TextField source='name' label='Имя' />
      <TextField source='patronymic' label='Отчество' />
      <TextField source='profession' label='Профессия' />
      <ImageField source='imageUrl' label='Ссылка на изображение' />
      <TextField source='shortBiography' label='Краткая биография' />
      <TextField source='biography' label='Биография' />
      <TextField source='works' label='Список сочинений' />
      <TextField source='awards' label='Награды' />
      <TextField source='competitions' label='Конкурсы и фестивали' />
      <TextField source='links' label='Ссылки' />
      <EditButton label='' />
      <DeleteButton label='' mutationMode='pessimistic' />
    </Datagrid>
  </List>
);
