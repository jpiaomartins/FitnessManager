import React, {useState} from "react";
import './UserIcon.css';

const UserIcon = ({iconPath}) => {
    const [isOpened, setOpened] = useState(false);

    const onIconClick = () => {
        setOpened(!isOpened)
    };

    const iconURL = 'https://www.myany.city/sites/default/files/styles/scaled_cropped_medium__260x260/public/field/image/node-related-images/sample-dwight-k-schrute.jpg?itok=8TfRscbA';
    return (
        <>
            <img className={isOpened?'user-icon active':'user-icon'} src={iconURL} onClick={onIconClick}></img>
        </>
    );
};

export default UserIcon;