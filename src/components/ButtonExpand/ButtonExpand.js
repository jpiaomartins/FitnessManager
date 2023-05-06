import React, {useState} from "react";
import './ButtonExpand.css';

const ButtonExpand = ({isCollapsed, changeCollapsed}) => {
    
    const onButtonClick = () => {
        changeCollapsed();
    };

    return (
        <div className={"bt-sm vertical-centered" + (isCollapsed?" rotate":"")}>
            <span className="material-symbols-rounded" onClick={onButtonClick}>
                keyboard_double_arrow_left
            </span>
        </div>
    );

}

export default ButtonExpand;