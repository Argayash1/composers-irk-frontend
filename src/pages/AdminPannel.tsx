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

const lightTheme = defaultTheme;
const darkTheme = { ...defaultTheme, palette: { mode: 'dark' } };

const AdminPannel = () => (
  // @ts-ignore
  <Admin dataProvider={dataProvider} basename='/admin' dashboard={Dashboard} theme={lightTheme} darkTheme={darkTheme}>
    <Resource
      name='news'
      list={NewsList}
      options={{ label: 'Новости' }}
      icon={NewspaperIcon}
      edit={NewsEdit}
      recordRepresentation={(record) => `${record.title}`}
    />
    <Resource
      name='members'
      list={MembersList}
      options={{ label: 'Состав' }}
      icon={UserIcon}
      edit={MembersEdit}
      recordRepresentation={(record) => `${record.surname} ${record.name} ${record.patronymic}`}
    />
    <Resource
      name='projects'
      list={ProjectsList}
      options={{ label: 'Проекты' }}
      icon={AccountTreeIcon}
      edit={ProjectsEdit}
      recordRepresentation={(record) => `${record.title}`}
    />
    <Resource
      name='scores'
      list={ScoresList}
      options={{ label: 'Ноты' }}
      icon={MusicNoteIcon}
      edit={ScoresEdit}
      recordRepresentation={(record) => `${record.composer} ${record.title}`}
    />
    <Resource name='audios' list={AudiosList} options={{ label: 'Аудиозаписи' }} icon={HeadsetIcon} />
    <Resource name='videos' list={VideosList} options={{ label: 'Видеозаписи' }} icon={VideoStableIcon} />
    <Resource name='reports' list={ReportsList} options={{ label: 'Отчёты' }} icon={ReportIcon} />
    <Resource
      name='articles'
      list={ArticlesList}
      options={{ label: 'СМИ о нас' }}
      icon={ArticleIcon}
      edit={ArticlesEdit}
      recordRepresentation={(record) => `${record.title}`}
    />
    <Resource name='ourHistory' list={OurHistoryList} options={{ label: 'Наша история' }} icon={HistoryIcon} />
  </Admin>
);

export default AdminPannel;
