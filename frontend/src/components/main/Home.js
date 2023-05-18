import React from "react";
import Carousel from "./Carousel";
import OpenCamera from "./OpenCamera";
import Footer from "./Footer";
import Team from "./Team";
import Page from "./Page";

const Home = () => {
  return (
    <>
      <Carousel />
      <Page/>
      
      <OpenCamera />
        <Team />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
