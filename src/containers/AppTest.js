import React from 'react';
import './AppTest.css';

const App = () => {
    return(
        <div className='app'>
            <div className='sidebar-menu'>
                <div className='mn top'>
                    <div className='icon'>IC</div>
                    <span className='icon-txt'>Top Sidebar</span>
                </div>
                <div className='mn middle'>
                    <div className='bt'>Button 1</div>
                    <div className='bt'>Button 2</div>
                    <div className='bt'>Button 3</div>
                    <div className='bt'>Button 4</div>
                </div>
                <div className='mn bottom'>
                    <div className='bt'>Button 4</div>
                </div>
            </div>  
            <div className='col-2'>
                <div className='header'>Header</div>
                <div className='content'>
                    <span className='content-text'>Content</span>
                </div>
            </div>
        </div>
    );
};

export default App;
