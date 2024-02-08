import { Edit, SimpleForm, TextInput } from 'react-admin';

export const NewsEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='id' label='ID' disabled />
      <TextInput source='title' label='Заголовок' />
      <TextInput source='newsText' label='Текст новости' />
      <TextInput source='imageUrl' label='Ссылка на изображение' />
    </SimpleForm>
  </Edit>
);
