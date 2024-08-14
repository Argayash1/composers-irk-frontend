import { Toolbar, SaveButton, DeleteButton } from 'react-admin';
import styles from './CustomToolbar.module.scss';

export const CustomToolbar = () => (
  <Toolbar className={styles.root}>
    <SaveButton label='Сохранить' />
    <DeleteButton label='Удалить' />
  </Toolbar>
);
