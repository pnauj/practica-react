import React from "react";
import About from "./AboutUs/About";
import Carrusel from "./Carrusel/Carrusel";

const Home = () => {
  return (
    <>
      <Carrusel />
      <section className="container">
        <h3 className="display-5 text-center fw-bold">
          Conoce un poco mas de nosotros
        </h3>
        <hr />
        <About />
      </section>
    </>
  );
};

export default Home;
