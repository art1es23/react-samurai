import React, { Component } from 'react';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Sidebar from './components/sidebar/Sidebar';

import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;
