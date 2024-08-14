import { Edit, SimpleForm, TextInput } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const OurHistoryEdit = (props: any) => (
  <Edit {...props} undoable={false}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput source='text' label='Текст' fullWidth multiline />
    </SimpleForm>
  </Edit>
);
