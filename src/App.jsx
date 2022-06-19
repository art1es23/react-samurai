import React from 'react';
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Sidebar from './components/sidebar/Sidebar';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <div className='app-wrapper-content'>
          {/* <Router> */}
          <Routes>
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>

          {/* </Router> */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
