import { Edit, SimpleForm, TextInput } from 'react-admin';

export const ScoresEdit = (props: any) => (
  <Edit {...props} undoable={false}>
    <SimpleForm>
      <TextInput source='id' label='ID' disabled fullWidth />
      <TextInput source='url' label='Ссылка на ноты' fullWidth />
      <TextInput source='title' label='Название произведения' fullWidth />
      <TextInput source='composer' label='Композитор' fullWidth />
      <TextInput source='category' label='Категория' fullWidth />
    </SimpleForm>
  </Edit>
);
