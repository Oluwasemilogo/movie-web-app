import React from "react";
import logo from "../Assets/logo.svg";
import menu from "../Assets/Menu.svg";
import { SearchBox } from "./SearchBox";


export const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white">
      <div className="flex items-center gap-6">
        <img src={logo} alt="logo" />
        <h1 className="text-xl font-bold">MovieBox</h1>
      </div>
      <SearchBox />
      <div className="flex items-center gap-6">
        <p className="text-xl font-medium">Sign in</p>
        <img src={menu} alt="menu" />
      </div>
    </div>
  );
};
