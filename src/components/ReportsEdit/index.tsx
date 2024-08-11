import { Edit, PrevNextButtons, SimpleForm, TextInput, TopToolbar } from 'react-admin';

export const ReportsEdit = (props: any) => (
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
      <TextInput source='imageUrl' label='Ссылка на изображение' fullWidth />
      <TextInput source='year' label='Год' fullWidth />
    </SimpleForm>
  </Edit>
);
