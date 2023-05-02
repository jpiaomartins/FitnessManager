import React from "react";
import './SideMenu.css';
import ButtonMenu from "../ButtonMenu/ButtonMenu";

const SideMenu = () => {
    return (
        <div className='side-menu'>
            <div className="top-info">
                <i class='bx bxs-universal-access bx-lg'></i>
                <h3>Fitness Manager</h3>
            </div>
            <div className="menu">
                <ButtonMenu classText={'bx bxs-home bx-md'} text={'Home'}/>
                <ButtonMenu classText={'bx bx-dumbbell bx-md'} text={'Exercises'}/>
                <ButtonMenu classText={'bx bxs-bowl-hot bx-md'} text={'Recipes'}/>
            </div>
        </div>
    )
};

export default SideMenu;