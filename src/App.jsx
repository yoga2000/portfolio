import React from "react";
import Nav from "./pages/Nav";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
