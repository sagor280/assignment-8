import React from 'react';
import GooglePlay from '../assets/playStore.png';
import AppleStore from '../assets/AppleStore.png';
import HeroImage from '../assets/hero.png';
import CompanySummary from './CompanySummary';
import { Link } from 'react-router';
const Hero = () => {
    return (
        <div>
      {/* // Top Hero */}
      <div className="bg-neutral-100 pt-10 px-5 lg:px-10">
       
     <div className="max-w-6xl mx-auto text-center space-y-6">
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#212121] leading-tight">
      We Build <br />
      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Productive
      </span>{" "}
      Apps
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
        <img className="w-5" src={GooglePlay} alt="Google Play" /> Google Play
        Store
      </Link>
      <Link
        className="btn bg-white border border-gray-300 hover:border-pink-500 hover:text-pink-500 flex items-center gap-2 px-5 py-2 rounded-md transition duration-200"
        to={"https://www.apple.com/store"}
        target="_blank"
      >
        <img className="w-5" src={AppleStore} alt="App Store" /> App Store
      </Link>
     </div>
        <div>
           <img src={HeroImage} alt="Hero Image" className="max-w-full w-[100%] sm:w-[80%] lg:w-[60%] mx-auto" />         
        </div>          
  </div>  

      </div>
      {/* // Hero Bottom / Trusted Section */}
      <CompanySummary />
    </div>
    );
};

export default Hero;