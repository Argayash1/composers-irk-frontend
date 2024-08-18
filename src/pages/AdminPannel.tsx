import * as React from 'react';
import { Admin, Resource, defaultTheme } from 'react-admin';
import {
  Dashboard,
  NewsList,
  MembersList,
  ProjectsList,
  VideosList,
  ArticlesList,
  ScoresList,
  ReportsList,
  AudiosList,
  OurHistoryList,
  NewsEdit,
  MembersEdit,
  ProjectsEdit,
  ScoresEdit,
  ArticlesEdit,
  AudiosEdit,
  VideosEdit,
  ReportsEdit,
  OurHistoryEdit,
  NewsCreate,
  MemberCreate,
  ProjectCreate,
  ScoreCreate,
  AudioCreate,
  VideoCreate,
  ReportCreate,
  ArticleCreate,
  OurHistoryCreate,
  LoginPage,
} from '../components';
import dataProvider from '../providers/dataProvider';
import indigo from '@mui/material/colors/indigo';
import amber from '@mui/material/colors/amber';
import red from '@mui/material/colors/red';
import authProvider from '../providers/authProvider';
import { useTitle } from '../hooks/useTitle';
import { menuIcons } from '../utils/dashboardItems';

const lightTheme = {
  ...defaultTheme,
  palette: {
    primary: indigo,
    secondary: amber,
    error: red,
  },
};
const darkTheme = { ...defaultTheme, palette: { mode: 'dark' } };

const AdminPannel = () => {
  useTitle('Административная панель');

  return (
    <Admin
      // @ts-ignore
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={LoginPage}
      basename='/admin'
      dashboard={Dashboard}
      theme={lightTheme}
      // @ts-ignore
      darkTheme={darkTheme}
    >
      <Resource
        name='news'
        list={NewsList}
        options={{ label: 'Новости' }}
        icon={menuIcons[0]}
        edit={NewsEdit}
        create={NewsCreate}
        recordRepresentation={(record) => `${record.title}`}
      />
      <Resource
        name='members'
        list={MembersList}
        options={{ label: 'Состав' }}
        icon={menuIcons[1]}
        edit={MembersEdit}
        create={MemberCreate}
        recordRepresentation={(record) => `${record.surname} ${record.name} ${record.patronymic}`}
      />
      <Resource
        name='projects'
        list={ProjectsList}
        options={{ label: 'Проекты' }}
        icon={menuIcons[2]}
        edit={ProjectsEdit}
        create={ProjectCreate}
        recordRepresentation={(record) => `${record.title}`}
      />
      <Resource
        name='scores'
        list={ScoresList}
        options={{ label: 'Ноты' }}
        icon={menuIcons[3]}
        edit={ScoresEdit}
        create={ScoreCreate}
        recordRepresentation={(record) => `${record.composer} ${record.title}`}
      />
      <Resource
        name='audios'
        list={AudiosList}
        options={{ label: 'Аудиозаписи' }}
        icon={menuIcons[4]}
        edit={AudiosEdit}
        create={AudioCreate}
        recordRepresentation={(record) => `${record.composer} ${record.title}`}
      />
      <Resource
        name='videos'
        list={VideosList}
        options={{ label: 'Видеозаписи' }}
        icon={menuIcons[5]}
        edit={VideosEdit}
        create={VideoCreate}
        recordRepresentation={(record) => `${record.composer} ${record.title}`}
      />
      <Resource
        name='reports'
        list={ReportsList}
        options={{ label: 'Отчёты' }}
        icon={menuIcons[6]}
        edit={ReportsEdit}
        create={ReportCreate}
        recordRepresentation={(record) => `${record.year}`}
      />
      <Resource
        name='articles'
        list={ArticlesList}
        options={{ label: 'СМИ о нас' }}
        icon={menuIcons[7]}
        edit={ArticlesEdit}
        create={ArticleCreate}
        recordRepresentation={(record) => `${record.title}`}
      />
      <Resource
        name='ourHistory'
        list={OurHistoryList}
        options={{ label: 'Наша история' }}
        icon={menuIcons[8]}
        edit={OurHistoryEdit}
        create={OurHistoryCreate}
        recordRepresentation={() => 'Текст'}
      />
    </Admin>
  );
};

export default AdminPannel;
