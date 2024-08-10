import * as React from 'react';
import { List, Datagrid, TextField, ImageField } from 'react-admin';

export const MembersList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <ImageField source='imageUrl' label='Ссылка на изображение' />
      <TextField source='surname' label='Фамилия' />
      <TextField source='name' label='Имя' />
      <TextField source='patronymic' label='Отчество' />
      <TextField source='profession' label='Профессия' />
      <TextField source='biography' label='Биография' />
      <TextField source='shortBiography' label='Краткая биография' />
      <TextField source='works' label='Список сочинений' />
      <TextField source='awards' label='Награды' />
      <TextField source='competitions' label='Конкурсы и фестивали' />
      <TextField source='links' label='Ссылки' />
    </Datagrid>
  </List>
);
