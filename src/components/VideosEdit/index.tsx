import { Edit, PrevNextButtons, required, SimpleForm, TextInput, TopToolbar } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const VideosEdit = (props: any) => (
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
      <TextInput source='createdAt' label='Дата создания' disabled fullWidth />
      <TextInput source='composer' label='Композитор' validate={[required()]} fullWidth />
      <TextInput source='title' label='Название произведения' validate={[required()]} fullWidth />
      <TextInput source='iframeUrl' label='Ссылка на видео в YouTube' validate={[required()]} fullWidth />
      <TextInput source='performer' label='Исполнители' multiline fullWidth />
      <TextInput source='about' label='Описание произведения' multiline fullWidth />
    </SimpleForm>
  </Edit>
);
