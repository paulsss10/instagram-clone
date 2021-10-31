import React from 'react';
import messenger_logo from '../../rsrcs/messenger-icon.svg';
import home_logo from '../../rsrcs/home-icon.svg';
import heart_logo from '../../rsrcs/heart-icon.svg';
import dummy_profile from '../../rsrcs/profile-dummy.jpg';
import search_logo from '../../rsrcs/search-icon.svg';

const Bottom_menu = () => {
    return (
        <div className="bottomMenu-section__wrapper container">
            <div>
                <img src={home_logo} />
            </div>

            <div>
                <img src={search_logo} />
            </div>

            <div>
                <img src={home_logo} />
            </div>

            <div>
                <img src={heart_logo} />
            </div>

            <div>
                <img className="profile-menu" src={dummy_profile} />
            </div>
        </div>
    )
}

export default Bottom_menu
