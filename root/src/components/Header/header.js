import React from 'react';
import instagram_logo from '../../rsrcs/ig-logo.png';
import messenger_logo from '../../rsrcs/messenger-icon.svg';
import home_logo from '../../rsrcs/home-icon.svg';
import heart_logo from '../../rsrcs/heart-icon.svg';
import dummy_profile from '../../rsrcs/profile-dummy.jpg';

const Header = () => {
    return (
        <div className="header-section__wrapper container--px">
            <div className="logo">
                <img alt="Instagram" src={instagram_logo} />
            </div>

            <div className="menus">
                <a>
                    <img alt="home" src={home_logo} />
                </a>
                <a>
                    <img alt="messenger" src={messenger_logo} />
                </a>
                <a>
                    <img alt="notification" src={heart_logo} />
                </a>
                <div className="profile-menu">
                    <img src={dummy_profile} />
                </div>
            </div>
        </div>
    )
}

export default Header
