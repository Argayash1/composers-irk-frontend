import { Edit, PrevNextButtons, required, SimpleForm, TextInput, TopToolbar } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const ReportsEdit = (props: any) => (
  <Edit
    {...props}
    actions={
      <TopToolbar>
        <PrevNextButtons />
      </TopToolbar>
    }
  >
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput source='id' label='ID' disabled fullWidth />
      <TextInput source='year' label='Год' validate={[required()]} fullWidth />
      <TextInput source='imageUrl' label='Ссылка на изображение' validate={[required()]} fullWidth />
    </SimpleForm>
  </Edit>
);
