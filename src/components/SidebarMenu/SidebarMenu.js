import React, {useState, useEffect} from "react";
import './SidebarMenu.css';
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import ButtonExpand from "../ButtonExpand/ButtonExpand";

const menuItems = [
    {
        id: '0',
        text: 'Home',
        icon: 'home'
    },
    {
        id: '1',
        text: 'Profile',
        icon: 'person'
    },
    {
        id: '2',
        text: 'Exercises',
        icon: 'directions_run'
    },
    {
        id: '3',
        text: 'Nutrition',
        icon: 'nutrition'
    },
    {
        id: '4',
        text: 'Recipes',
        icon: 'cooking'
    },
];

const SidebarMenu = () => {
    const [activeItemId, setActiveItem] = useState('');
    const [isCollapsed, setCollapsed] = useState(false);

    const changeActiveItem = (id) => {
        setActiveItem(id);
    };

    const changeCollapsed = () => {
        setCollapsed(!isCollapsed);
    }

    return (
        <nav className={isCollapsed?'sidebar-menu compact':'sidebar-menu'}>
            <header className="sidebar-header">    
                <div className="logo-header">FM</div>
                <span className={isCollapsed?"hd-text vertical-centered hidden":"hd-text vertical-centered"}>Fitness Manager</span>
            </header>
            <ButtonExpand isCollapsed={isCollapsed} changeCollapsed={changeCollapsed} />
            <div className="sidebar-items">
                { 
                    menuItems.map(item => {
                        if(activeItemId === item.id) {
                            return <ButtonMenu key={item.id} id={item.id} icon={item.icon} text={item.text} changeActiveItem={changeActiveItem} itemActive={true} isCollapsed={isCollapsed}/>;
                        } else {
                            return <ButtonMenu key={item.id} id={item.id} icon={item.icon} text={item.text} changeActiveItem={changeActiveItem} itemActive={false} isCollapsed={isCollapsed}/>;
                        }
                    })
                }
            </div>
            <footer className='sidebar-footer'>
                <div className='logout vertical-centered'>
                    <span style={{fontSize: "36px",  fontVariationSettings: "'wght' 150, 'opsz' 36, 'FILL' 1"}} className="material-symbols-rounded menu-icon vertical-centered">logout</span>
                    <span className={isCollapsed?'ft-text hidden':'ft-text'}>Logout</span>
                </div>
            </footer>
        </nav>
    )
};

export default SidebarMenu;