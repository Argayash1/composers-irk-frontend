import { Create, SimpleForm, TextInput, required, useNotify, useRedirect } from 'react-admin';

export const VideoCreate = (props: any) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Видеозапись успешно добавлена!`);
    redirect('list', 'videos');
  };

  const onError = () => {
    notify(`Не могу добавить видеозапись. Пожалуйста, проверьте правильность заполнения полей ввода!`);
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess, onError }} undoable={false} title='Добавить видеозапись'>
      <SimpleForm>
        <TextInput source='iframeUrl' label='Ссылка на видео в YouTube' resettable validate={[required()]} fullWidth />
        <TextInput source='composer' label='Композитор' resettable validate={[required()]} fullWidth />
        <TextInput source='title' label='Название произведения' resettable validate={[required()]} fullWidth />
        <TextInput source='performer' label='Исполнитель' resettable fullWidth />
        <TextInput
          source='about'
          label='Описание произведения'
          resettable
          validate={[required()]}
          multiline
          fullWidth
        />
      </SimpleForm>
    </Create>
  );
};
