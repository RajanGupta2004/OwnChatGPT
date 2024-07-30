import React from "react";
import "./dashboardlayout.css";
import { Outlet } from "react-router-dom";
import ChatList from "../../components/chatList/ChatList";

const DashboardLayout = () => {
  return (
    <div className="dashBoardlayout">
      <div className="menu">
        <ChatList />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
