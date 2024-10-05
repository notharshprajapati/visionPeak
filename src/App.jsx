import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/hero";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-red-100 text-white">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Footer />
    </div>
  );
};

export default App;
