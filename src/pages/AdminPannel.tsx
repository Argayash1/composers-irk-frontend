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
} from '../components';
import dataProvider from '../providers/dataProvider';
import UserIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HeadsetIcon from '@mui/icons-material/Headset';
import VideoStableIcon from '@mui/icons-material/VideoStable';
import ReportIcon from '@mui/icons-material/Report';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import HistoryIcon from '@mui/icons-material/History';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import indigo from '@mui/material/colors/indigo';
import amber from '@mui/material/colors/amber';
import red from '@mui/material/colors/red';
import authProvider from '../providers/authProvider';

const lightTheme = {
  ...defaultTheme,
  palette: {
    primary: indigo,
    secondary: amber,
    error: red,
  },
};
const darkTheme = { ...defaultTheme, palette: { mode: 'dark' } };

const AdminPannel = () => (
  <Admin
    // @ts-ignore
    dataProvider={dataProvider}
    authProvider={authProvider}
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
      icon={NewspaperIcon}
      edit={NewsEdit}
      create={NewsCreate}
      recordRepresentation={(record) => `${record.title}`}
    />
    <Resource
      name='members'
      list={MembersList}
      options={{ label: 'Состав' }}
      icon={UserIcon}
      edit={MembersEdit}
      create={MemberCreate}
      recordRepresentation={(record) => `${record.surname} ${record.name} ${record.patronymic}`}
    />
    <Resource
      name='projects'
      list={ProjectsList}
      options={{ label: 'Проекты' }}
      icon={AccountTreeIcon}
      edit={ProjectsEdit}
      create={ProjectCreate}
      recordRepresentation={(record) => `${record.title}`}
    />
    <Resource
      name='scores'
      list={ScoresList}
      options={{ label: 'Ноты' }}
      icon={MusicNoteIcon}
      edit={ScoresEdit}
      create={ScoreCreate}
      recordRepresentation={(record) => `${record.composer} ${record.title}`}
    />
    <Resource
      name='audios'
      list={AudiosList}
      options={{ label: 'Аудиозаписи' }}
      icon={HeadsetIcon}
      edit={AudiosEdit}
      create={AudioCreate}
      recordRepresentation={(record) => `${record.composer} ${record.title}`}
    />
    <Resource
      name='videos'
      list={VideosList}
      options={{ label: 'Видеозаписи' }}
      icon={VideoStableIcon}
      edit={VideosEdit}
      create={VideoCreate}
      recordRepresentation={(record) => `${record.composer} ${record.title}`}
    />
    <Resource
      name='reports'
      list={ReportsList}
      options={{ label: 'Отчёты' }}
      icon={ReportIcon}
      edit={ReportsEdit}
      create={ReportCreate}
      recordRepresentation={(record) => `${record.year}`}
    />
    <Resource
      name='articles'
      list={ArticlesList}
      options={{ label: 'СМИ о нас' }}
      icon={ArticleIcon}
      edit={ArticlesEdit}
      create={ArticleCreate}
      recordRepresentation={(record) => `${record.title}`}
    />
    <Resource
      name='ourHistory'
      list={OurHistoryList}
      options={{ label: 'Наша история' }}
      icon={HistoryIcon}
      edit={OurHistoryEdit}
      create={OurHistoryCreate}
      recordRepresentation={() => 'Текст'}
    />
  </Admin>
);

export default AdminPannel;
