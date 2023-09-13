import React from "react";
import logo from "../Assets/logo.svg";
import menu from "../Assets/Menu.svg";
import { SearchBox } from "./SearchBox";


export const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white">
      <div className="gap-2 flex items-center md:gap-6">
        <img src={logo} alt="logo" className="hidden md:block" />
        <h1 className="text-xl font-bold">MovieBox</h1>
      </div>
      <SearchBox/>
      <div className="gap-1  flex items-center md:gap-6 ">
        <p className=" hidden sm:block text-base md:text-xl font-medium">Sign in</p>
        <img src={menu} alt="menu"  />
      </div>
    </div>
  );
};
