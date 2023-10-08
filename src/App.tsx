import React from 'react';

import './App.css';
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

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}> 
<Route path='' element={<Home />}/>
<Route path='news' element={<News />} />
<Route path='unionmembers' element={<UnionMembers />} />
<Route path='projects' element={<Projects />} />
<Route path='scores' element={<Scores />} />
<Route path='media' element={<Media />} />
<Route path='aboutus' element={<AboutUs />} />
<Route path='reports' element={<Reports />} />
<Route path='contacts' element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
