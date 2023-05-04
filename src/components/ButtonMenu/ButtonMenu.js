import React, {useState, useEffect} from "react";
import './ButtonMenu.css';

const ButtonMenu = ({id, classText, text, changeActiveItem, itemActive}) => {
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
            className={isActive?'button-menu active':'button-menu'} 
            onClick={onButtonClick}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
            <i className={(isActive || isActiveOver?classText.active:classText.nonActive) + ' vertical-centered'}>
            </i>
            <span className="vertical-centered">{text}</span>
        </div>
    )
};

export default ButtonMenu;