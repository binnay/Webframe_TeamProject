import React from 'react';
import homeImage from "../media/home.png";
import './TopMenuBar.css';

function TopMenuBar() {
    return (
        <div className="header">
            <img src={homeImage} id="home" alt="로고" />
            <button type="button" id="intro1">동아리 소개</button>   
            <button type="button" id="join1">동아리 지원</button>
        </div>
    );
}

export default TopMenuBar;
