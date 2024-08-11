import { Edit, PrevNextButtons, SimpleForm, TextInput, TopToolbar } from 'react-admin';

export const MembersEdit = (props: any) => (
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
      <TextInput source='surname' label='Фамилия' fullWidth />
      <TextInput source='name' label='Имя' fullWidth />
      <TextInput source='patronymic' label='Отчество' fullWidth />
      <TextInput source='profession' label='Профессия' fullWidth />
      <TextInput source='biography' label='Биография' fullWidth multiline />
      <TextInput source='shortBiography' label='Краткая биография' fullWidth multiline />
      <TextInput source='works' label='Список сочинений' fullWidth multiline />
      <TextInput source='awards' label='Награды' fullWidth multiline />
      <TextInput source='competitions' label='Конкурсы и фестивали' fullWidth multiline />
      <TextInput source='links' label='Ссылки' fullWidth multiline />
    </SimpleForm>
  </Edit>
);
