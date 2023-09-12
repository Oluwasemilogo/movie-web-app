import React from "react";
import logo from "../Assets/logo.svg";
import homeIcon from "../Assets/homeIcon.svg";
import movie from "../Assets/movie.svg";
import tvSeries from "../Assets/tvSeries.svg";
import calendar from "../Assets/Calendar.svg";
import log from "../Assets/log.svg";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <>
      <div className="w-1/6 items-center  h-[100vh] rounded-r-[45px] border border-solid border-[rgba(0,0,0,0.30)]">
        <div className="flex flex-col items-center">
          <ul className="mt-6 space-y-8 flex flex-col">
            <Link to="/">
            <li className="flex gap-4 items-center py-2 px-10">
              <img src={logo} alt="logo" className="" />
              <p>MovieBox</p>
              </li>
            </Link>
            <Link to="/">
            <li className="flex gap-4 items-center px-10  py-2 ">
              <img src={homeIcon} alt="" className="w-8" />
              <p>Home</p>
              </li>
            </Link>
            <li className="flex gap-4 pl-12 py-4 bg-red-500 bg-opacity-10   border-r-4 border-[#BE123C]">
              <img src={movie} alt="" className="w-8" />
              <p>Movies</p>
            </li>
            <li className="flex gap-4 items-center  py-2 px-10 ">
              <img src={tvSeries} alt="" className="w-8" />
              <p>TV Series</p>
            </li>
            <li className="flex gap-4 items-center  py-2 px-10 ">
              <img src={calendar} alt="" className="w-8" />
              <p>Upcoming</p>
            </li>
            <li className="flex flex-col gap-4 items-center  p-4 rounded-lg bg-red-500 bg-opacity-10 border border-solid border-[#BE123C] px-10">
              <p className="text-sm font-semibold text-gray-800 text-opacity-80">
                Play movie quizzes and earn free tickets
              </p>
              <p className="text-sm font-normal text-[#666]">
                50k people are playing now
              </p>
              <button className="text-[#BE123C] bg-[#be121c] bg-opacity-20 rounded-lg  p-2">
                Start Playing
              </button>
            </li>
            <li className="flex gap-4 items-center  px-10 py-2 ">
              <img src={log} alt="" className="w-8" />
              <p>Log Out</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};