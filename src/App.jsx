import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/hero";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Footer from "./components/Footer";
import "@fontsource/kanit";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      {/* <Hero /> */}
      <Portfolio />
      {/* <About /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
