import React from "react";
import './SideMenu.css';
import ButtonMenu from "../ButtonMenu/ButtonMenu";

const SideMenu = () => {
    return (
        <div className='side-menu'>
            <ButtonMenu classText={'bx bx-dumbbell bx-md'} text={'Exercises'}/>
            <ButtonMenu classText={'bx bxs-bowl-hot bx-md'} text={'Recipes'}/>
        </div>
    )
};

export default SideMenu;