import React from "react";
import SidebBar from "./SidebBar";
import Header from "./Header";
import { Outlet, RouterProvider } from "react-router-dom";
import store from "../Store/store";

const Layout = () => {
  return (
    <div className="flex justify-between">
      <SidebBar />

      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
