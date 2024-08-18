import { Edit, PrevNextButtons, required, SimpleForm, TextInput, TopToolbar } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const AudiosEdit = (props: any) => (
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
      <TextInput source='composer' label='Композитор' validate={[required()]} fullWidth />
      <TextInput source='title' label='Название произведения' validate={[required()]} fullWidth />
      <TextInput source='performer' label='Исполнитель' validate={[required()]} fullWidth />
      <TextInput source='audioUrl' label='Ссылка на аудиофайл' validate={[required()]} fullWidth />
    </SimpleForm>
  </Edit>
);
