import { Edit, PrevNextButtons, required, SimpleForm, TextInput, TopToolbar } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const NewsEdit = (props: any) => (
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
      <TextInput source='title' label='Заголовок' validate={[required()]} fullWidth />
      <TextInput source='newsText' label='Текст' validate={[required()]} multiline fullWidth />
      <TextInput source='imageUrl' label='Ссылка на изображение' validate={[required()]} fullWidth />
    </SimpleForm>
  </Edit>
);
