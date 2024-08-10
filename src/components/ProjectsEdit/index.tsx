import { Edit, SimpleForm, TextInput } from 'react-admin';

export const ProjectsEdit = (props: any) => (
  <Edit {...props} undoable={false}>
    <SimpleForm>
      <TextInput source='id' label='ID' disabled fullWidth />
      <TextInput source='imageUrl' label='Ссылка на изображение' fullWidth />
      <TextInput source='title' label='Название' fullWidth />
      <TextInput source='description' label='Описание проекта' multiline fullWidth />
    </SimpleForm>
  </Edit>
);
