import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
import styles from './DashBoard.module.scss';
import { dashboardItems } from '../../utils/dashboardItems';
import { Logo } from '../Logo';
import { contentAdreses } from '../../utils/contentAdreses';

export const Dashboard = () => {
  const dashboardListItems = dashboardItems.map((item, index) => (
    <li key={index}>
      <Link to={item.path} className={styles.navLink}>
        <item.icon style={{ width: '80px', height: '80px' }} color='action' />
        {item.name}
      </Link>
    </li>
  ));

  const contentAdressesListItems = contentAdreses.map((contentAdress, index) => (
    <li className={styles.contentListItem} key={index}>
      <p className={styles.contentListItemTitle}>{contentAdress.title}</p>&nbsp;
      <a href={contentAdress.url}>{contentAdress.url}</a>
    </li>
  ));

  return (
    <Card>
      <Title title='Главная' />
      <CardContent>
        <Logo place='admin' />
        <h1 className={styles.title}>Добро пожаловать в административную панель сайта ИООО "Союз композиторов"!</h1>
        <nav>
          <ul className={styles.navList}>{dashboardListItems}</ul>
        </nav>
        <h2 className={styles.listTitle}>Адреса для размещения контента:</h2>
        <ul className={styles.contentList}>{contentAdressesListItems}</ul>
      </CardContent>
    </Card>
  );
};
