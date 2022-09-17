import React from "react";
import logoGif from "../assets/images/enigmaOptimised.gif";

const Footer = () => {
  return (
    <footer className="min-h-[70vh] w-full bg-primary flex items-end justify-center">
      <div>
        <img
          src={logoGif}
          alt="Enigma Logo"
          className="max-w-[11rem] mx-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;
