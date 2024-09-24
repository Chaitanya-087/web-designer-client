import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Split from 'react-split';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Split className="split" expandToMin={true} minSize={250}>
        <Sidebar />
        <Outlet />
      </Split>
    </React.Fragment>
  );
}

export default App;