import { Edit, PrevNextButtons, required, SimpleForm, TextInput, TopToolbar } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const MembersEdit = (props: any) => (
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
      <TextInput source='surname' label='Фамилия' validate={[required()]} fullWidth />
      <TextInput source='name' label='Имя' validate={[required()]} fullWidth />
      <TextInput source='patronymic' label='Отчество' validate={[required()]} fullWidth />
      <TextInput source='imageUrl' label='Ссылка на изображение' validate={[required()]} fullWidth />
      <TextInput source='profession' label='Профессия' validate={[required()]} fullWidth />
      <TextInput source='biography' label='Биография' validate={[required()]} fullWidth multiline />
      <TextInput source='shortBiography' label='Краткая биография' validate={[required()]} fullWidth multiline />
      <TextInput source='works' label='Список сочинений' validate={[required()]} fullWidth multiline />
      <TextInput source='awards' label='Награды' fullWidth multiline />
      <TextInput source='competitions' label='Конкурсы и фестивали' fullWidth multiline />
      <TextInput source='links' label='Ссылки' fullWidth multiline />
    </SimpleForm>
  </Edit>
);
