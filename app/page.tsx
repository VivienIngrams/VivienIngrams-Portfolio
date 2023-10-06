import React from "react";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
