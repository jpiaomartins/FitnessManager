import React, {useState, useEffect} from "react";
import './ButtonMenu.css';

const ButtonMenu = ({id, icon, text, changeActiveItem, itemActive, isCollapsed}) => {
    const [isActive, setActive] = useState(false);
    const [isActiveOver, setActiveOver] = useState(false);

    useEffect(() => {
        setActive(itemActive);
    }, [itemActive]);

    const onButtonClick = (event) => {
        setActive(true);
        changeActiveItem(event.currentTarget.id);
    };

    const onMouseOver = () => {
        setActiveOver(true);
    };

    const onMouseOut = () => {
        setActiveOver(false);
    };

    return (
        <div
            id={id} 
            className={(isActive?'menu-btn active':'menu-btn') + (isCollapsed?' compact':'')} 
            onClick={onButtonClick}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
            <span 
                style={{fontSize: "36px",  fontVariationSettings: "'wght' 250, 'opsz' 36, " + (isActive || isActiveOver?"'FILL' 1":"'FILL' 0")}} 
                className="material-symbols-rounded menu-icon vertical-centered">{icon}
            </span>
            <span className={isCollapsed?"bt-txt vertical-centered hidden":"bt-txt vertical-centered"}>{text}</span>
        </div>
    )
};

export default ButtonMenu;