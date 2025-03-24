import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
          {/* Hero Left */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left justify-center space-y-8 py-12 lg:py-0">
            <div className="space-y-6 max-w-xl">
              {/* Bestseller Label */}
              <div className="inline-flex items-center gap-3 bg-black/5 px-4 py-2 rounded-full">
                <div className="w-8 h-[2px] bg-black"></div>
                <p className="font-medium text-sm tracking-wider text-gray-700">
                  OUR BESTSELLERS
                </p>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900">Latest</span>
                <span className="block text-gray-900 mt-2">Arrivals</span>
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-lg">
                Discover our newest collection of premium products. 
                Shop the latest trends with exclusive designs.
              </p>

              {/* CTA Button */}
              <Link 
                to="/collection"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-colors duration-300 group"
              >
                <span className="font-medium">SHOP NOW</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Hero Right */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              <img
                src={assets.hero_img}
                className="w-full max-w-lg mx-auto lg:max-w-none object-contain transform hover:scale-105 transition-transform duration-700"
                alt="Hero Image"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-100 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
