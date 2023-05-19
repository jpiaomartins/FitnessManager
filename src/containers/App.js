import React, {useState} from 'react';
import './App.css';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';
import Header from '../components/Header/Header';

function App() {
  const [isCollapsed, setCollapsed] = useState(false);

  const changeCollapsed = () => {
    setCollapsed(!isCollapsed);
    console.log(isCollapsed);
  };

  return (
    <div className="App">
        <SidebarMenu isMenuCollapsed={isCollapsed}/>
        <div className='content-section'>
          <Header isMenuCollapsed={isCollapsed} changeCollapsed={changeCollapsed} />
          {/* TO BE REPLACED */}
          <div className='content'></div>
        </div>
    </div>
  );
}

export default App;
