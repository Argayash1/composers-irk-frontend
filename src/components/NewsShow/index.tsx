// NewsShow.js
import * as React from 'react';
import { ImageField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const NewsShow = () => (
  <Show resource='news'>
    <SimpleShowLayout>
      <TextField source='_id' />
      <TextField source='title' label='Заголовок' />
      <TextField source='newsText' label='Текст новости' />
      <ImageField source='imageUrl' label='Ссылка на изображение' />
      <TextField source='createdAt' label='Дата создания' />
    </SimpleShowLayout>
  </Show>
);
