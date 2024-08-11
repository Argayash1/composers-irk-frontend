import { Edit, PrevNextButtons, SimpleForm, TextInput, TopToolbar } from 'react-admin';

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
    <SimpleForm>
      <TextInput source='id' label='ID' disabled fullWidth />
      <TextInput source='imageUrl' label='Ссылка на изображение' fullWidth />
      <TextInput source='title' label='Название' fullWidth />
      <TextInput source='description' label='Описание проекта' multiline fullWidth />
    </SimpleForm>
  </Edit>
);
