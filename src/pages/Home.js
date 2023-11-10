import React from "react";
import Main from "../components/Main";
import Navigation from "../components/Navigation";
import { AboutMe } from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Main />
      <Navigation />
      <AboutMe />
      <Skills />
      <Projects/>
      <Footer/>
    </>
  );
};

export default Home;
