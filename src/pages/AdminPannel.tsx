import * as React from 'react';
import { Admin, Layout, MenuItemLink, Resource, Sidebar } from 'react-admin';
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
} from '../components';
import dataProvider from '../providers/dataProvider';

const CustomSidebar = () => (
  <Sidebar>
    <MenuItemLink to='/admin/news' primaryText='Новости' />
  </Sidebar>
);

const CustomLayout = () => (
  <Layout>
    <CustomSidebar />
    <p>Привет</p>
  </Layout>
);

const AdminPannel = () => (
  // @ts-ignore
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name='news' list={NewsList} />
    <Resource name='members' list={MembersList} />
    <Resource name='projects' list={ProjectsList} />
    <Resource name='scores' list={ScoresList} />
    <Resource name='audios' list={AudiosList} />
    <Resource name='videos' list={VideosList} />
    <Resource name='reports' list={ReportsList} />
    <Resource name='articles' list={ArticlesList} />
    <Resource name='ourHistory' list={OurHistoryList} />
  </Admin>
);

export default AdminPannel;
