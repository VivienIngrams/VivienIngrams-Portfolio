import React from "react";
import Main from "./components/Main";
import About from "./components/About";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Main />
      <About />
    </>
  );
};

export default Home;
