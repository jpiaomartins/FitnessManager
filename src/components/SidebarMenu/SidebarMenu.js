import React, {useState} from "react";
import './SidebarMenu.css';
import ButtonMenu from "../ButtonMenu/ButtonMenu";

const SidebarMenu = () => {
    const [activeItemId, setActiveItem] = useState('');
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
    ];

    const changeActiveItem = (id) => {
        setActiveItem(id);
        console.log(id);
    };

    return (
        <div className='sidebar-menu'>
            <div className="sidebar-header">
                <div className="logo-header">FM</div>
                <span className="vertical-centered">Fitness Manager</span>
            </div>
            <div className="sidebar-items">
                { 
                    menuItems.map(item => {
                        if(activeItemId === item.id) {
                            console.log("True");
                            return <ButtonMenu key={item.id} id={item.id} icon={item.icon} text={item.text} changeActiveItem={changeActiveItem} itemActive={true}/>;
                        } else {
                            return <ButtonMenu key={item.id} id={item.id} icon={item.icon} text={item.text} changeActiveItem={changeActiveItem} itemActive={false}/>;
                        }
                    })
                }
            </div>
            <div className='sidebar-footer'>
                <div className='logout vertical-centered'>
                    <span style={{fontSize: "36px",  fontVariationSettings: "'wght' 150, 'opsz' 36, 'FILL' 1"}} className="material-symbols-rounded menu-icon vertical-centered">logout</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    )
};

export default SidebarMenu;