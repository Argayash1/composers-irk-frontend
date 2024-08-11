import { Edit, PrevNextButtons, SimpleForm, TextInput, TopToolbar } from 'react-admin';

export const NewsEdit = (props: any) => (
  <Edit
    {...props}
    actions={
      <TopToolbar>
        <PrevNextButtons />
      </TopToolbar>
    }
  >
    <SimpleForm>
      <TextInput source='id' label='ID' disabled fullWidth />
      <TextInput source='title' label='Заголовок' fullWidth />
      <TextInput source='newsText' label='Текст' multiline fullWidth />
      <TextInput source='imageUrl' label='Ссылка на изображение' fullWidth />
    </SimpleForm>
  </Edit>
);
