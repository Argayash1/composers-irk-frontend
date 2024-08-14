import { Create, SimpleForm, TextInput, required, useNotify, useRedirect } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const NewsCreate = (props: any) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Новость успешно создана!`);
    redirect('list', 'news');
  };

  const onError = () => {
    notify(`Не могу создать новость. Пожалуйста, проверьте правильность заполнения полей ввода!`);
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess, onError }} title='Создать новость'>
      <SimpleForm toolbar={<CustomToolbar />}>
        <TextInput source='title' label='Заголовок' resettable validate={[required()]} fullWidth />
        <TextInput source='newsText' label='Текст новости' resettable validate={[required()]} multiline fullWidth />
        <TextInput source='imageUrl' label='Ссылка на изображение' resettable validate={[required()]} fullWidth />
      </SimpleForm>
    </Create>
  );
};
