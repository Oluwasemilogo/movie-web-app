import React from "react";
import Search from '../Assets/Search.svg'

export const SearchBox = () => {
  return (
    <div className=" hidden md:flex items-center">
      <div className="flex items-center justify-between w-[525px] p-2 rounded border border-gray-300 bg-transparent text-white">
        <input
          className="w-full bg-transparent focus:outline-none"
          type="text"
          placeholder="What do you want to watch?"
        />
        <img src={Search} alt="search" />
      </div>
    </div>
  );
};
