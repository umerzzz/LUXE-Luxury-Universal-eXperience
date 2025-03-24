import React from "react";
import { assets } from "../assets/assets";
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-8 my-10 mt-40 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <img src={assets.logo} className="w-8 h-8 rounded-full" alt="LUXE" />
            <span className="text-xl font-bold tracking-wider">LUXE</span>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-4">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Delivery</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-4">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +Phone Number Here
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> Email Id Here
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <Facebook
              size={20}
              className="text-gray-600 hover:text-black cursor-pointer"
            />
            <Twitter
              size={20}
              className="text-gray-600 hover:text-black cursor-pointer"
            />
            <Instagram
              size={20}
              className="text-gray-600 hover:text-black cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Copyright Fix */}
      <div className="border-t border-gray-200 w-full flex flex-col items-center">
        <p className="py-4 sm:py-6 text-xs sm:text-sm text-center text-gray-500 w-full">
          &copy; 2025 TheElecent. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
