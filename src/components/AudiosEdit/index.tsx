import { Edit, PrevNextButtons, SimpleForm, TextInput, TopToolbar } from 'react-admin';

export const AudiosEdit = (props: any) => (
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
      <TextInput source='audioUrl' label='Ссылка на аудиофайл' fullWidth />
      <TextInput source='composer' label='Композитор' fullWidth />
      <TextInput source='title' label='Название произведения' fullWidth />
      <TextInput source='performer' label='Исполнитель' fullWidth />
    </SimpleForm>
  </Edit>
);
