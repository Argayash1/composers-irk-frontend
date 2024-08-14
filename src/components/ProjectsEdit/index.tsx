import { Edit, PrevNextButtons, required, SimpleForm, TextInput, TopToolbar } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const ProjectsEdit = (props: any) => (
  <Edit
    {...props}
    undoable={false}
    actions={
      <TopToolbar>
        <PrevNextButtons />
      </TopToolbar>
    }
  >
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput source='id' label='ID' disabled fullWidth />
      <TextInput source='title' label='Название' validate={[required()]} fullWidth />
      <TextInput source='description' label='Описание проекта' validate={[required()]} multiline fullWidth />
      <TextInput source='imageUrl' label='Ссылка на изображение' validate={[required()]} fullWidth />
    </SimpleForm>
  </Edit>
);
