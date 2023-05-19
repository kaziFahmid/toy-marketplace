import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Toys from "../Toys/Toys";
import Reviews from "../Reviews/Reviews";
import About from "../About/About";
import UseTitle from "../../UseTitle";

export default function Home() {
  UseTitle("Home");
  return (
    <div>
      {/* banner */}
      <Banner />
      {/* Gallery*/}
      <Gallery />
      {/* Toys*/}
      <Toys />
      {/*Reviews*/}
      <Reviews />
      {/*About*/}
      <About />
    </div>
  );
}
