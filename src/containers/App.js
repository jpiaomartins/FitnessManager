import React from 'react';
import './App.css';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';
import Header from '../components/Header/Header';

function App() {
  return (
    <div className="App">
        <Header />
        <SidebarMenu />
    </div>
  );
}

export default App;
