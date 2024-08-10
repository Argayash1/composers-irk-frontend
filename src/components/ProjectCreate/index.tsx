import { Create, SimpleForm, TextInput, required, useNotify, useRedirect } from 'react-admin';

export const ProjectCreate = (props: any) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Проект успешно создан!`);
    redirect('list', 'projects');
  };

  const onError = () => {
    notify(`Не могу создать проект. Пожалуйста, проверьте правильность заполнения полей ввода!`);
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess, onError }} undoable={false} title='Создать проект'>
      <SimpleForm>
        <TextInput source='imageUrl' label='Ссылка на изображение' resettable validate={[required()]} fullWidth />
        <TextInput source='title' label='Название проекта' resettable validate={[required()]} fullWidth />
        <TextInput
          source='description'
          label='Описание проекта'
          resettable
          validate={[required()]}
          multiline
          fullWidth
        />
      </SimpleForm>
    </Create>
  );
};
