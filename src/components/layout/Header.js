import React from "react";
import { FaSearch, FaGlobe, FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      {/* Mobile: Show ONLY Search Bar */}
      <div className="sm:hidden flex justify-center">
        <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 border border-gray-300 w-full max-w-md">
          <input
            type="text"
            placeholder="Start your search"
            className="flex-grow outline-none border-none text-gray-700 text-sm focus:ring-0"
          />
          <button className="bg-[#FF385C] text-white rounded-full p-2 shadow-md hover:bg-red-500 transition">
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tablet and Desktop: Full Header */}
      <div className="sm:flex hidden container mx-auto items-center justify-between px-6">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src="/assets/Airbnb.png"
            alt="Airbnb Logo"
            className="h-6 mr-2"
            width="102"
            height="32"
          />
        </div>

        {/* Center: Navigation */}
        <nav className="flex space-x-6 text-gray-600 font-medium text-base leading-6">
          <a href="#" className="text-black font-semibold">
            Homes
          </a>
          <a href="#" className="hover:text-black">
            Experiences
          </a>
        </nav>

        {/* Right: User Controls */}
        <div className="flex items-center space-x-4">
          <div className="text-sm font-semibold cursor-pointer hidden md:block">
            Sun & Sand your home
          </div>
          <FaGlobe className="text-gray-600 cursor-pointer hidden md:block" />
          <div className="flex items-center space-x-2 border rounded-full px-4 py-2 shadow-sm cursor-pointer hover:bg-gray-100 transition">
            <HiMenu className="text-gray-600 w-8 h-8" />
            <FaUserCircle className="text-gray-600 w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Tablet and Desktop: Search Bar */}
      <div className="hidden sm:flex justify-center mt-4">
        <div className="flex items-center bg-white shadow-md rounded-full border border-gray-300 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] xl:w-[60%] max-w-[900px]">
          {/* Search Inputs */}
          <div className="px-5 py-3 flex flex-col flex-grow">
            {/* Added py-3 */}
            <span className="text-xs font-semibold text-gray-700">Where</span>
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full outline-none border-none text-gray-700 text-sm focus:ring-0"
            />
          </div>
          <div className="px-5 py-3 flex flex-col w-28 border-l border-gray-300">
            {/* Added px-5 py-3 */}
            {/* Divider */}
            <span className="text-xs font-semibold text-gray-700">Check in</span>
            <input
              type="text"
              placeholder="Add dates"
              className="outline-none border-none text-gray-700 text-sm w-full focus:ring-0"
            />
          </div>
          <div className="px-5 py-3 flex flex-col w-28 border-l border-gray-300">
            {/* Added px-5 py-3 */}
            {/* Divider */}
            <span className="text-xs font-semibold text-gray-700">Check out</span>
            <input
              type="text"
              placeholder="Add dates"
              className="outline-none border-none text-gray-700 text-sm w-full focus:ring-0"
            />
          </div>
          <div className="px-5 py-3 flex flex-col w-28 border-l border-gray-300">
            {/* Added px-5 py-3 */}
            {/* Divider */}
            <span className="text-xs font-semibold text-gray-700">Who</span>
            <input
              type="text"
              placeholder="Add guests"
              className="outline-none border-none text-gray-700 text-sm w-full focus:ring-0"
            />
          </div>

          {/* Search Button */}
          <button
            className="flex items-center justify-center bg-[#FF385C] text-white rounded-full p-2 shadow-md hover:bg-red-500 transition"
            style={{ padding: "8px" }} // Adjusted padding
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;