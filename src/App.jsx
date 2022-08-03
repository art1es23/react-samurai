import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import UsersContainer from './components/users/UsersContainer';

import './App.css';
import SidebarContainer from './components/sidebar/SidebarContainer';

const App = ({ state }) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <SidebarContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<Dialogs />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<UsersContainer />} />

        </Routes>
      </div>
    </div>
  )
}

export default App;
