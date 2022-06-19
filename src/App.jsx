import React, { Component } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';

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
