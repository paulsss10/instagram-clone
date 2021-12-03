import React from 'react'
import Inbox from './inbox'
import backArrow from '../../rsrcs/back_arrow-icon.svg'
import newChat from '../../rsrcs/new_chat-icon.svg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Messenger_root = () => {
    return (
      <div className="messenger-section__wrapper container">
        <div className="header">
          <div className="back_arrow-container header-subContainer">
            <Link to="/">
              <img src={backArrow} />
            </Link>
          </div>

          <div className="title-container header-subContainer">
            <h2>Chats</h2>
          </div>

          <div className="new_chat-container header-subContainer">
            <img src={newChat} />
          </div>
        </div>
        <Inbox />
      </div>
    );
}

export default Messenger_root