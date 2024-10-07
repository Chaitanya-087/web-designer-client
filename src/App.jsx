import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Split from 'react-split';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
        <Sidebar />
        <Outlet />
    </div>
  );
}

export default App;