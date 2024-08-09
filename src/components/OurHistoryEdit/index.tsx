import { Edit, SimpleForm, TextInput } from 'react-admin';

export const OurHistoryEdit = (props: any) => (
  <Edit {...props} undoable={false}>
    <SimpleForm>
      <TextInput source='text' label='Текст' fullWidth multiline />
    </SimpleForm>
  </Edit>
);
