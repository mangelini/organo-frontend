import { StarIcon } from "@heroicons/react/24/solid";

import leaf from "../assets/leaf.png";
import vegetable from "../assets/vegetable.png";
import dish from "../assets/dish.png";
import avatar1 from "../assets/avatar-1.jpeg";
import avatar2 from "../assets/avatar-2.jpeg";
import avatar3 from "../assets/avatar-3.jpeg";
import driver from "../assets/driver.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-wrap-reverse gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="relative z-10 md:w-1/2 w-full">
        <img
          className="absolute top-0 right-0 md:-top-4 md:-right-8 w-24 h-auto"
          src={leaf}
          alt=""
        />

        <span className="flex items-center px-1 text-xl text-green">
          <span className="font-medium">100% Organic food</span>
          <img className="w-auto h-8" src={vegetable} alt="" />
        </span>

        <h1 className="pt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight whitespace-nowrap">
          Healthy Lifestyle <br />
          is your only <br />
          <span className="space-nowrap text-green">unfair advantage</span>
        </h1>

        <p className="pt-8 sm:text-lg max-w-md font-normal text-gray-600 leading-relaxed">
          Choose healthy habits with Organo daily meal prepared by our expert
          nutritionist and chef
        </p>

        <div className="flex pt-8 space-x-4 sm:space-x-6">
          <Link
            to="/user"
            className="flex justify-center items-center w-full sm:w-auto h-13 px-8 bg-green font-medium text-white rounded-xl whitespace-nowrap hover:shadow-primary transition-shadow duration-300"
          >
            Get started
          </Link>
          <Link
            to="/foods"
            className="flex justify-center items-center w-full sm:w-auto h-13 px-8 font-medium text-gray-900 border border-gray-900 rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
          >
            Explore menu
          </Link>
        </div>
      </div>

      <div className="relative md:w-1/2 w-full flex flex-col justify-between">
        <img
          className="w-96 lg:w-full drop-shadow-2xl self-center lg:self-end"
          src={dish}
          alt=""
        />
        <div className="absolute right-0 lg:-right-6 top-0 lg:top-28 flex flex-col py-5 px-7 rounded-2xl shadow-xl bg-white/80 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
          <div className="flex -space-x-3">
            <div className="w-13 h-13 rounded-full border-4 border-white object-cover overflow-hidden">
              <img src={avatar1} alt="" />
            </div>
            <div className="w-13 h-13 rounded-full border-4 border-white object-cover overflow-hidden">
              <img src={avatar2} alt="" />
            </div>
            <div className="w-13 h-13 rounded-full border-4 border-white object-cover overflow-hidden">
              <img src={avatar3} alt="" />
            </div>
          </div>
          <div className="pt-3 font-bold">Happy customers</div>
          <div className="flex items-center text-gray-600 leading-relaxed">
            <StarIcon className="w-5 h-5" />
            <span className="pl-1">4.9 (+2.5k Ratings)</span>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 md:bottom-32 lg:bottom-16 flex bg-white/80 rounded-2xl shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
          <img className="w-auto h-20 self-end" src={driver} alt="" />
          <div className="pr-7 pl-2 py-5">
            <div className="font-bold">Fast delivery</div>
            <div className="text-gray-600 leading-relaxed">
              30 mins delivery 🚀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
