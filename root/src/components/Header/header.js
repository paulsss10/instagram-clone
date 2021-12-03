import React from 'react';
import instagram_logo from '../../rsrcs/ig-logo.png';
import messenger_logo from '../../rsrcs/messenger-icon.svg';
import home_logo from '../../rsrcs/home-icon.svg';
import heart_logo from '../../rsrcs/heart-icon.svg';
import dummy_profile from '../../rsrcs/profile-dummy.jpg';
import camera_logo from '../../rsrcs/camera-icon.svg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = () => {
    return (
      <Router>
        <div className="header-section__wrapper container--px">
          <div className="camera">
            <Link to="/">
            <img alt="home" src={camera_logo} />
            </Link>
          </div>
          <div className="logo">
            <Link to="/">
              <img alt="Instagram" src={instagram_logo} />
            </Link>
          </div>

          <div className="search desktop">
            <input type="text" placeholder="Search" />
          </div>

          <div className="menus">
            <Link to="/">
              <a className="desktop">
                <img alt="home" src={home_logo} />
              </a>
            </Link>
            <Link to="/messages">
              <a>
                <img alt="messenger" src={messenger_logo} />
              </a>
            </Link>

            <a className="desktop">
              <img alt="notification" src={heart_logo} />
            </a>
            <div className="profile-menu desktop">
              <Link to="/">
                <img src={dummy_profile} />
              </Link>
            </div>
          </div>
        </div>
      </Router>
    );
}

export default Header
