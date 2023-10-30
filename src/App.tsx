import React from 'react';

import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import News from './pages/News';
import Projects from './pages/Projects';
import UnionMembers from './pages/UnionMembers';
import Scores from './pages/Scores';
import Media from './pages/Media';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Reports from './pages/Reports';
import FullNews from './pages/FullNews';
import FullProject from './pages/FullProject';
import FullUnionMemberInfo from './pages/FullUnionMemberInfo';
import FullVideo from './pages/FullVideo';
import FullArticle from './pages/FullArticle';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='news' element={<News />} />
        <Route path='news/:id' element={<FullNews />} />
        <Route path='unionmembers' element={<UnionMembers />} />
        <Route path='unionmembers/:id' element={<FullUnionMemberInfo />} />
        <Route path='projects' element={<Projects />} />
        <Route path='projects/:id' element={<FullProject />} />
        <Route path='scores' element={<Scores />} />
        <Route path='media' element={<Media />} />
        <Route path='media/:id' element={<FullVideo />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='aboutus/:id' element={<FullArticle />} />
        <Route path='reports' element={<Reports />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='searchresults' element={<SearchResults />} />
      </Route>
    </Routes>
  );
}

export default App;
