import React from "react";
import logoGif from "../assets/images/enigmaOptimised.gif";

const Login = () => {
  return (
    <section className="min-h-[70vh] bg-primary w-full flex justify-center items-center mb-[12rem]">
      <div
        className="flex items-center sm:gap-5 gap-3 sm:flex-row flex-col"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div>
          <img
            src={logoGif}
            alt="Enigma Logo"
            className="sm:max-w-[15rem] max-w-[10rem] mx-auto"
          />
        </div>
        <input
          type="text"
          name=""
          id=""
          className="rounded-full py-1 px-2 text-center outline-none text-primary"
          placeholder="Enter Password"
        />
      </div>
    </section>
  );
};

export default Login;
