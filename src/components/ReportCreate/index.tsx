import { Create, SimpleForm, TextInput, required, useNotify, useRedirect } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const ReportCreate = (props: any) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Отчёт успешно создан!`);
    redirect('list', 'reports');
  };

  const onError = () => {
    notify(`Не могу создать отчёт. Пожалуйста, проверьте правильность заполнения полей ввода!`);
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess, onError }} undoable={false} title='Создать отчёт'>
      <SimpleForm toolbar={<CustomToolbar />}>
        <TextInput source='year' label='Год' resettable validate={[required()]} fullWidth />
        <TextInput source='imageUrl' label='Ссылка на изображение' resettable validate={[required()]} fullWidth />
      </SimpleForm>
    </Create>
  );
};
