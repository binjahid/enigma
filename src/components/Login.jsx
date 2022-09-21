import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import logoGif from "../assets/images/enigmaOptimised.gif";

const Login = ({ setIsLogin }) => {
  const [password, setPassword] = React.useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    fetch(
      "https://marvelous-zion-36182.herokuapp.com/api/v1.0/password/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass: password,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setIsLogin(true);
        }
      });
  };

  return (
    <section className="min-h-[100vh] bg-primary w-full flex justify-center items-center">
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
        <div className="flex items-center gap-4">
          <input
            type="text"
            name=""
            id=""
            className="rounded-full py-1 px-2 text-center outline-none text-primary"
            placeholder="Enter Password"
            onChange={handlePasswordChange}
          />
          <BsFillArrowRightCircleFill
            className="text-3xl text-[#E5E5E5] cursor-pointer"
            onClick={handleLogin}
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
