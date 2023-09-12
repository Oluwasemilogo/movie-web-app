import React from 'react';
import facebook from '../Assets/facebook.svg';
import instagram from '../Assets/instagram.svg';
import twitter from '../Assets/twitter.svg';
import youtube from '../Assets/youtube.svg';

export const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="flex items-center gap-6">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={youtube} alt="youtube" />
      </div>
      <div className="flex items-center gap-6 mt-4">
        <p className="text-gray-900 font-medium text-md">Conditions of use</p>
        <p className="text-gray-900 font-medium text-md">Privacy & Policy</p>
        <p className="text-gray-900 font-medium text-md">Press Room</p>
      </div>
      <p className="mt-4 mb-20 text-gray-500 text-md font-medium">
        © 2023 MovieBox by Oluwasemilogo{" "}
      </p>
    </div>
  );
}
