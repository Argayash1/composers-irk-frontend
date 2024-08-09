import { Edit, SimpleForm, TextInput } from 'react-admin';

export const ReportsEdit = (props: any) => (
  <Edit {...props} undoable={false}>
    <SimpleForm>
      <TextInput source='id' label='ID' disabled fullWidth />
      <TextInput source='imageUrl' label='Ссылка на изображение' fullWidth />
      <TextInput source='year' label='Год' fullWidth />
    </SimpleForm>
  </Edit>
);
