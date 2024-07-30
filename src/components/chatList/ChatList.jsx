import React from "react";
import "./chatList.css";
import { Link } from "react-router-dom";

const ChatList = () => {
  return (
    <div className="chatlist">
      <span className="title">DashBoard</span>
      <Link to="/" className="menus">
        Create new Chat
      </Link>
      <Link to="/" className="menus">
        Explore Rajan AI
      </Link>
      <Link to="/" className="menus">
        Contact
      </Link>
      <hr />
      <span>Recent Chats</span>
      <div className="list">
        <Link>My chat</Link>
        <Link>My chat</Link>
        <Link>My chat</Link>
        <Link>My chat</Link>
        <Link>My chat</Link>
        <Link>My chat</Link>
        <Link>My chat</Link>
        <Link>My chat</Link>

        <Link>My chat</Link>
      </div>
      <hr />

      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <h3>Upgrade pro version 3@00</h3>
          <h5>Lorem ipsum dolor sit amet.</h5>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
