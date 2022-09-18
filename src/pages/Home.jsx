import React from "react";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Login from "../components/Login";
import Slogan from "../components/Slogan";

const Home = () => {
  const [isLogin, setIsLogin] = React.useState(false);

  console.log(isLogin);

  return (
    <main className="bg-[#E5E5E5] overflow-hidden">
      {!isLogin && <Login setIsLogin={setIsLogin} />}
      {isLogin && (
        <>
          <Gallery />
          <Slogan />
          <Aboutus />
          <Footer />
        </>
      )}
    </main>
  );
};

export default Home;
