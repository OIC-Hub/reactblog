import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-[250px]">
          <Sidebar />
        </div>
        <div className="w-[768px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
