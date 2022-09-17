import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
import "./App.css";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
