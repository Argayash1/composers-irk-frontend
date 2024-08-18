import { Create, SimpleForm, TextInput, required, useNotify, useRedirect } from 'react-admin';
import { CustomToolbar } from '../CustomToolbar';

export const MemberCreate = (props: any) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Карточка члена Союза успешно создана!`);
    redirect('list', 'members');
  };

  const onError = () => {
    notify(`Не могу создать карточку члена Союза. Пожалуйста, проверьте правильность заполнения полей ввода!`);
  };

  return (
    <Create {...props} mutationOptions={{ onSuccess, onError }} title='Создать карточку члена Союза'>
      <SimpleForm toolbar={<CustomToolbar />}>
        <TextInput source='imageUrl' label='Ссылка на изображение' resettable validate={[required()]} fullWidth />
        <TextInput source='surname' label='Фамилия' resettable validate={[required()]} fullWidth />
        <TextInput source='name' label='Имя' resettable validate={[required()]} multiline fullWidth />
        <TextInput source='patronymic' label='Отчество' resettable validate={[required()]} fullWidth />
        <TextInput source='profession' label='Профессия' resettable validate={[required()]} fullWidth />
        <TextInput source='biography' label='Биография' resettable validate={[required()]} multiline fullWidth />
        <TextInput
          source='shortBiography'
          label='Краткая биография'
          resettable
          validate={[required()]}
          multiline
          fullWidth
        />
        <TextInput source='works' label='Список сочинений' resettable validate={[required()]} multiline fullWidth />
        <TextInput source='awards' label='Награды' resettable multiline fullWidth />
        <TextInput source='competitions' label='Конкурсы и фестивали' resettable multiline fullWidth />
        <TextInput source='links' label='Ссылки' resettable multiline fullWidth />
      </SimpleForm>
    </Create>
  );
};
