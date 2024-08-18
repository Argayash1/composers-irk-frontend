import { Edit, PrevNextButtons, required, SimpleForm, TextInput, TopToolbar } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const ScoresEdit = (props: any) => (
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
      <TextInput source='composer' label='Композитор' validate={[required()]} fullWidth />
      <TextInput source='title' label='Название произведения' validate={[required()]} fullWidth />
      <TextInput source='url' label='Ссылка на ноты' validate={[required()]} fullWidth />
      <TextInput source='category' label='Категория' validate={[required()]} fullWidth />
    </SimpleForm>
  </Edit>
);
