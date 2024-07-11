"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBedPulse } from "react-icons/fa6";
import Slider from "react-slick";

const Slick = () => {
  const settings = {
    dots: FaBedPulse,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const pix = [
    { id: 1, image: "https://dumocloud.com/_nuxt/slide--1.54646fc0.svg" },
    { id: 2, image: "https://dumocloud.com/_nuxt/slide--1.54646fc0.svg" },
    { id: 3, image: "https://dumocloud.com/_nuxt/slide--1.54646fc0.svg" },
    { id: 4, image: "https://dumocloud.com/_nuxt/slide--1.54646fc0.svg" },
    { id: 5, image: "https://dumocloud.com/_nuxt/slide--1.54646fc0.svg" },
    { id: 6, image: "https://dumocloud.com/_nuxt/slide--1.54646fc0.svg" },
  ];
  return (
    <div className="slider-container overflow-hidden mx-2">
      <Slider {...settings}>
        <div className="w-[60px] h-[500px] bg-pink-100 ">
          <h3>1</h3>
        </div>
        <div className="w-[60px] h-[500px] bg-pink-200">
          <h3>2</h3>
        </div>
        <div className="w-[60px] h-[500px] bg-pink-300">
          <h3>3</h3>
        </div>
        <div className="w-[60px] h-[500px] bg-pink-400">
          <h3>4</h3>
        </div>
        <div className="w-[60px] h-[500px] bg-pink-500">
          <h3>5</h3>
        </div>
        <div className="w-[60px] h-[500px] bg-pink-600">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Slick;
