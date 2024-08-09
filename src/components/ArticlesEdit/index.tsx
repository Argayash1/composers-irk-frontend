import { Edit, SimpleForm, TextInput } from 'react-admin';

export const ArticlesEdit = (props: any) => (
  <Edit {...props} undoable={false}>
    <SimpleForm>
      <TextInput source='id' label='ID' disabled fullWidth />
      <TextInput source='createdAt' label='Дата создания' disabled fullWidth />
      <TextInput source='imageUrl' label='Ссылка на изображение' fullWidth />
      <TextInput source='title' label='Заголовок' fullWidth />
      <TextInput source='articleDescription' label='Описание статьи' multiline fullWidth />
      <TextInput source='articleText' label='Текст статьи' multiline fullWidth />
    </SimpleForm>
  </Edit>
);
