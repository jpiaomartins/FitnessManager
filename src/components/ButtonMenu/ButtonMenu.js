import React, {useState} from "react";
import './ButtonMenu.css';

const ButtonMenu = ({classText, text}) => {
    const [isActive, setActive] = useState(false);

    const onButtonClick = () => {
        setActive(!isActive);
    };

    return (
        <div className={isActive?'button-menu active':'button-menu'} onClick={onButtonClick}>
            <i className={classText + ' centered'}></i>
            <p className="centered">{text}</p>
        </div>
    )
};

export default ButtonMenu;