import React from "react";

//import data
import { heroData } from "../data";

//import components
import Header from "./Header";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";

const Hero = () => {
  //Destructuring header data
  const { pretitle, title, subtitle, btnText } = heroData;
  return (
    <section className="min-h-[980px] bg-hero bg-cover bg-right">
      {/* Header */}
      <Header />
      <div className="container mx-auto">
        {/* text */}
        <div>
          {/* pretitle */}
          <div>{pretitle}</div>
          {/* title */}
          <div>{title}</div>
          {/* sub-title */}
          <div>{subtitle}</div>
          {/* button */}
          <button>{btnText}</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
