import React, {useState} from "react";
import './SidebarMenu.css';
import ButtonMenu from "../ButtonMenu/ButtonMenu";

const SidebarMenu = () => {
    const [activeItemId, setActiveItem] = useState('');
    const menuItems = [
        {
            id: '0',
            text: 'Home',
            classText: {
                nonActive:'bx bx-home-alt-2 bx-md',
                active: 'bx bxs-home-alt-2 bx-md',
            }
        },
        {
            id: '1',
            text: 'Profile',
            classText: {
                nonActive:'bx bx-smile bx-md',
                active: 'bx bxs-smile bx-md',
            }
        },
        {
            id: '2',
            text: 'Exercises',
            classText: {
                nonActive:'bx bx-run bx-md',
                active: 'bx bx-run bx-md',
            }
        },
        {
            id: '3',
            text: 'Food Plan',
            classText: {
                nonActive:'bx bx-bowl-hot bx-md',
                active: 'bx bxs-bowl-hot bx-md',
            }
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
                            return <ButtonMenu key={item.id} id={item.id} classText={item.classText} text={item.text} changeActiveItem={changeActiveItem} itemActive={true}/>;
                        } else {
                            return <ButtonMenu key={item.id} id={item.id} classText={item.classText} text={item.text} changeActiveItem={changeActiveItem} itemActive={false}/>;
                        }
                    })
                }
            </div>
        </div>
    )
};

export default SidebarMenu;