import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "./../../data/Data";

const MenuBar = () => {
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const [activeItem, setActiveItem] = useState(categories[0].label);
  const [displayBeforeTaxes, setDisplayBeforeTaxes] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (menuRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = menuRef.current;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth);
      }
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    menuRef.current.addEventListener("scroll", checkScrollable);

    return () => {
      window.removeEventListener("resize", checkScrollable);
      if (menuRef.current) {
        menuRef.current.removeEventListener("scroll", checkScrollable);
      }
    };
  });

  const scroll = (direction) => {
    if (menuRef.current) {
      menuRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  const handleItemClick = (label, path) => {
    setActiveItem(label);
    navigate(path);
  };

  const toggleDisplayBeforeTaxes = () => {
    setDisplayBeforeTaxes(!displayBeforeTaxes);
  };

  return (
    <>
      <div className="border-b px-4 py-3 bg-white relative flex items-center">
        {showLeftButton && (
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full border border-gray-300 shadow-md focus:outline-none hidden sm:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        <div
          ref={menuRef}
          className="flex items-center space-x-6 overflow-x-auto px-4 scrollbar-hide"
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-gray-700 cursor-pointer hover:text-black whitespace-nowrap px-0.5 py-0 ${
                activeItem === item.label ? "font-semibold" : ""
              }`}
              onClick={() => handleItemClick(item.label, item.path)}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-xxs font-medium truncate w-full text-center">
                {item.label}
              </span>
              {activeItem === item.label && (
                <div className="w-full h-1 bg-black mt-1"></div>
              )}
            </div>
          ))}
        </div>
        {showRightButton && (
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full border border-gray-300 shadow-md focus:outline-none mr-2 hidden sm:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg border border-gray-300 flex items-center text-sm hidden sm:flex">
              <SlidersHorizontal size={16} className="mr-2" /> Filters
            </button>

            {/* Toggle for larger screens */}
            <label className="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 hidden lg:flex">
              <span className="text-sm text-gray-600 whitespace-nowrap">
                Display total before taxes
              </span>
              <div className="relative w-10">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={displayBeforeTaxes}
                  onChange={toggleDisplayBeforeTaxes}
                />
                <div
                  className={`block w-10 h-6 rounded-full transition-all ${
                    displayBeforeTaxes ? "bg-blue-600" : "bg-gray-400"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    displayBeforeTaxes ? "translate-x-4" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Mobile toggle moved below the menu list */}
      <div className="w-full mt-4 sm:hidden px-4">
        <label className="border border-gray-300 rounded-lg px-4 py-3 w-full block">
          <div className="flex items-center justify-between w-full">
            <span className="text-sm text-gray-600 font-medium">
              Display total before taxes
            </span>

            <div className="relative w-10">
              <input
                type="checkbox"
                className="sr-only"
                checked={displayBeforeTaxes}
                onChange={toggleDisplayBeforeTaxes}
              />
              <div
                className={`block w-10 h-6 rounded-full transition-all ${
                  displayBeforeTaxes ? "bg-blue-600" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  displayBeforeTaxes ? "translate-x-4" : ""
                }`}
              ></div>
            </div>
          </div>

          <span className="text-xs text-gray-500 mt-1 block">
            Includes all fees, before taxes
          </span>
        </label>
      </div>
    </>
  );
};

export default MenuBar;
