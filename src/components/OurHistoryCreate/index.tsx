import { Create, SimpleForm, TextInput, required, useNotify, useRedirect } from 'react-admin';

export const OurHistoryCreate = (props: any) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Наша история успешно создана!`);
    redirect('list', 'ourHistory');
  };

  const onError = () => {
    notify(`Не могу создать нашу историю. Пожалуйста, проверьте правильность заполнения полей ввода!`);
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess, onError }} undoable={false} title='Создать нашу историю'>
      <SimpleForm>
        <TextInput source='text' label='Текст' resettable validate={[required()]} multiline fullWidth />
      </SimpleForm>
    </Create>
  );
};
