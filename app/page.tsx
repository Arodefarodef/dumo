import React from "react";
import Header from "./dumo/header";
import Hero from "./dumo/hero";
import Slider from "./dumo/slider";
import Comp from "./dumo/comp";
import Puny from "./dumo/punent";

const Page = () => {
  return (
    <div>
      <Header />

      <div>
        <Hero />
      </div>

      <Slider />
      <Puny />
      <Comp />
    </div>
  );
};

export default Page;
