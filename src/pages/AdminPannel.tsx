import * as React from 'react';
import { Admin, Pagination, Resource } from 'react-admin';
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
} from '../components';
import customDataProvider from '../providers/newsProvider';

const AdminPannel = () => (
  // @ts-ignore
  <Admin dataProvider={customDataProvider} dashboard={Dashboard} pagination={<Pagination />}>
    <Resource name='news' list={NewsList} />
    <Resource name='members' list={MembersList} />
    <Resource name='projects' list={ProjectsList} />
    <Resource name='scores' list={ScoresList} />
    <Resource name='audios' list={AudiosList} />
    <Resource name='videos' list={VideosList} />
    <Resource name='reports' list={ReportsList} />
    <Resource name='articles' list={ArticlesList} />
  </Admin>
);

export default AdminPannel;
