import { Create, SimpleForm, TextInput, required, useNotify, useRedirect } from 'react-admin';

export const AudioCreate = (props: any) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Аудиозапись успешно добавлена!`);
    redirect('list', 'audios');
  };

  const onError = () => {
    notify(`Не могу добавить аудиозапись. Пожалуйста, проверьте правильность заполнения полей ввода!`);
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess, onError }} title='Добавить аудиозапись'>
      <SimpleForm>
        <TextInput source='audioUrl' label='Ссылка на аудиофайл' resettable validate={[required()]} fullWidth />
        <TextInput source='composer' label='Композитор' resettable validate={[required()]} fullWidth />
        <TextInput source='title' label='Название произведения' resettable validate={[required()]} fullWidth />
        <TextInput source='performer' label='Исполнитель' resettable validate={[required()]} fullWidth />
      </SimpleForm>
    </Create>
  );
};
