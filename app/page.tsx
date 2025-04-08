import React from "react";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Main />      
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
