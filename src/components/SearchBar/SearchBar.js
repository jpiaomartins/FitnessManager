import React from "react";
import './SearchBar.css';

const SearchBar = () => {
    return (
        <>
        <div className="search-bar">
            <input className="search-placeholder" type="search" placeholder="type here" />
            <span 
                style={{fontSize: "30px",  fontVariationSettings: "'wght' 250, 'opsz' 36, 'FILL' 0"}} 
                className="search-icon material-symbols-rounded">
            search
            </span>
        </div>
        </>
    )
}

export default SearchBar;