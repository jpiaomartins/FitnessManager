import React, {useState, useEffect} from "react";
import './DarkModeToggle.css';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [animation, setAnimation] = useState(-1);

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        }
    },[darkMode])

    const changeDarkMode = () => {
        setDarkMode(!darkMode);
        setAnimation(darkMode?1:0);
       
    };

    return (
        <>
            <span 
                    style={{fontSize: "36px",  fontVariationSettings: "'wght' 250, 'opsz' 36, 'FILL' 0"}} 
                    className={"darkmode-toggle material-symbols-rounded" + (animation===1?' spin':(animation===0? ' inverted-spin':''))}
                    onClick={changeDarkMode}>
                {darkMode?'brightness_7':'brightness_4'}
            </span>
        </>
    )
};

export default DarkModeToggle;