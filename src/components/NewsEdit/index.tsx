import { Edit, SimpleForm, TextInput } from 'react-admin';

export const NewsEdit = (props: any) => (
  <Edit {...props} undoable={false}>
    <SimpleForm>
      <TextInput source='id' label='ID' disabled fullWidth />
      <TextInput source='title' label='Заголовок' fullWidth />
      <TextInput source='newsText' label='Текст новости' multiline fullWidth />
      <TextInput source='imageUrl' label='Ссылка на изображение' fullWidth />
    </SimpleForm>
  </Edit>
);
