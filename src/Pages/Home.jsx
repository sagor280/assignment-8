import React from 'react';

import { Link } from "react-router";
import appleStore from "../assets/AppleStore.png"
import playStore from "../assets/playStore.png"
import heroPng from "../assets/hero.png"
const Home = () => {
    return (
     <div className="bg-neutral-100 pt-10 px-5 lg:px-10">
  {/* Title Section  */}
  <div className="max-w-6xl mx-auto text-center space-y-6">
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#212121] leading-tight">
      We Build <br />
      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Productive
      </span>{" "}
      Appsz
    </h1>

    <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
      At HERO.IO, we craft innovative apps designed to make everyday life
      simpler, smarter, and more exciting. <br className="hidden sm:block" />{" "}
      Our goal is to turn your ideas into digital experiences that truly make an
      impact.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
      <Link
        className="btn bg-white border border-gray-300 hover:border-purple-600 hover:text-purple-600 flex items-center gap-2 px-5 py-2 rounded-md transition duration-200"
        to={"https://play.google.com/store/games?hl=en&pli=1"}
        target="_blank"
      >
        <img className="w-5" src={playStore} alt="Google Play" /> Google Play
        Store
      </Link>
      <Link
        className="btn bg-white border border-gray-300 hover:border-pink-500 hover:text-pink-500 flex items-center gap-2 px-5 py-2 rounded-md transition duration-200"
        to={"https://www.apple.com/store"}
        target="_blank"
      >
        <img className="w-5" src={appleStore} alt="App Store" /> App Store
      </Link>
    </div>
  </div>
  {/* Title Section End */}

  {/* Banner Section Start */}
  <div className="flex flex-col items-center justify-center mt-12 text-center">
    <img
      src={heroPng}
      alt="Hero Banner"
      className="max-w-full w-[90%] sm:w-[80%] lg:w-[60%] mx-auto"
    />

 <div className="w-full bg-[#7B00FF] text-white text-center py-16">
  <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12">
    Trusted by Millions, Built for You
  </h1>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 px-6">
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Total Downloads</h3>
      <p className="text-4xl font-bold">29.6M</p>
      <p className="text-sm text-white/80">21% More than Last Month</p>
    </div>

    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Total Reviews</h3>
      <p className="text-4xl font-bold">906K</p>
      <p className="text-sm text-white/80">46% More than Last Month</p>
    </div>

    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Active Apps</h3>
      <p className="text-4xl font-bold">132+</p>
      <p className="text-sm text-white/80">31 More Will Launch</p>
    </div>
  </div>
</div>
  </div>
  {/* Banner Section End */}
</div>

    );
};

export default Home;