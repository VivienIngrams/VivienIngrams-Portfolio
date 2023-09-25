import React from "react";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
