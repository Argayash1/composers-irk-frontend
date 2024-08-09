import { Edit, SimpleForm, TextInput } from 'react-admin';

export const OurHistoryEdit = (props: any) => (
  <Edit {...props} undoable={false}>
    <SimpleForm>
      <TextInput source='id' label='ID' disabled fullWidth />
      <TextInput source='text' label='Текст' fullWidth multiline />
    </SimpleForm>
  </Edit>
);
