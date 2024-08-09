import { Edit, SimpleForm, TextInput } from 'react-admin';

export const VideosEdit = (props: any) => (
  <Edit {...props} undoable={false}>
    <SimpleForm>
      <TextInput source='id' label='ID' disabled fullWidth />
      <TextInput source='createdAt' label='Дата создания' disabled fullWidth />
      <TextInput source='iframeUrl' label='Ссылка на видео в YouTube' fullWidth />
      <TextInput source='composer' label='Композитор' fullWidth />
      <TextInput source='title' label='Название произведения' fullWidth />
      <TextInput source='performer' label='Исполнитель' fullWidth />
      <TextInput source='about' label='Описание произведения' fullWidth />
    </SimpleForm>
  </Edit>
);
