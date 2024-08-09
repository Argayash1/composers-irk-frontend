import { Edit, SimpleForm, TextInput } from 'react-admin';

export const AudiosEdit = (props: any) => (
  <Edit {...props} undoable={false}>
    <SimpleForm>
      <TextInput source='id' label='ID' disabled fullWidth />
      <TextInput source='audioUrl' label='Ссылка на аудиофайл' fullWidth />
      <TextInput source='composer' label='Композитор' fullWidth />
      <TextInput source='title' label='Название произведения' fullWidth />
      <TextInput source='performer' label='Исполнитель' fullWidth />
    </SimpleForm>
  </Edit>
);
