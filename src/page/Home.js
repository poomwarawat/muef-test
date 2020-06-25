import React from "react";
import Header from "../component/Home/Header";
import Content from "../component/Home/Content";
import About from "../component/Home/About";
import Know from "../component/Home/Know";
import Contact from "../component/Home/Contact";
import Footer from "../component/Home/Footer";

const Home = () => {
  return (
    <div>
      <div className="home-content">
        <Header />
        <Content />
        <About />
        <Know />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
