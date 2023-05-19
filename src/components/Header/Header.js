import React from "react";
import './Header.css';
import ButtonExpand from "../ButtonExpand/ButtonExpand";
import UserIcon from "../UserIcon/UserIcon";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({isMenuCollapsed, changeCollapsed}) => {
    return (
        <div className="header-nav">
            <ButtonExpand isCollapsed={isMenuCollapsed} changeCollapsed={changeCollapsed} />
            <SearchBar />
            <div className="header-menu">
                <DarkModeToggle />
                <span 
                    style={{fontSize: "36px",  fontVariationSettings: "'wght' 250, 'opsz' 36, 'FILL' 0"}} 
                    className="material-symbols-rounded notif vertical-centered">
                notifications
                </span>
                <UserIcon />
            </div>
        </div>
    );
};

export default Header;