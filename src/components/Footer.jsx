import React from "react";
import { GrMail } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";

import logoGif from "../assets/images/enigmaOptimised.gif";

const Footer = () => {
  return (
    <footer className="min-h-[70vh] w-full bg-primary flex items-center justify-center">
      <div className="flex items-center gap-6">
        <GrMail className="text-4xl text-[#E5E5E5] hover:text-black duration-500 cursor-pointer" />
        <img
          src={logoGif}
          alt="Enigma Logo"
          className="max-w-[11rem] mx-auto"
        />
        <AiFillInstagram className="text-4xl text-[#E5E5E5] hover:text-black duration-500 cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
