import { Create, SimpleForm, TextInput, required, useNotify, useRedirect } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const ScoreCreate = (props: any) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Ноты успешно созданы!`);
    redirect('list', 'scores');
  };

  const onError = () => {
    notify(`Не могу создать ноты. Пожалуйста, проверьте правильность заполнения полей ввода!`);
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess, onError }} undoable={false} title='Создать ноты'>
      <SimpleForm toolbar={<CustomToolbar />}>
        <TextInput source='url' label='Ссылка на ноты' resettable validate={[required()]} fullWidth />
        <TextInput source='title' label='Название произведения' resettable validate={[required()]} fullWidth />
        <TextInput source='composer' label='Композитор' resettable validate={[required()]} fullWidth />
        <TextInput source='category' label='Категория' resettable validate={[required()]} fullWidth />
      </SimpleForm>
    </Create>
  );
};
