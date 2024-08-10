import { Create, SimpleForm, TextInput, required, useNotify, useRedirect } from 'react-admin';

export const ArticleCreate = (props: any) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Статья успешно создана!`);
    redirect('list', 'articles');
  };

  const onError = () => {
    notify(`Не могу создать статью. Пожалуйста, проверьте правильность заполнения полей ввода!`);
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess, onError }} title='Создать статью'>
      <SimpleForm>
        <TextInput source='imageUrl' label='Ссылка на изображение' resettable validate={[required()]} fullWidth />
        <TextInput source='title' label='Заголовок' resettable validate={[required()]} fullWidth />
        <TextInput
          source='articleDescription'
          label='Описание статьи'
          resettable
          validate={[required()]}
          multiline
          fullWidth
        />
        <TextInput source='articleText' label='Текст статьи' resettable validate={[required()]} multiline fullWidth />
      </SimpleForm>
    </Create>
  );
};
