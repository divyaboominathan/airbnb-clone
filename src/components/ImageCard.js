import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiUpload } from "react-icons/fi";

const ImageCard = ({
  images,
  location,
  description,
  dateRange,
  price,
  rating,
  isGuestFavorite,
  isDownloadIcon,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full  transition hover:shadow-xl">
      {/* Image Slider */}
      <div className="relative w-full">
        <img
          src={images[currentIndex]}
          alt="Slide"
          className="w-full h-[260px] object-cover rounded-t-xl transition-all duration-300"
        />

        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-2 bg-black bg-opacity-40 p-2 rounded-full text-white transform -translate-y-1/2 hover:bg-opacity-60 transition"
          onClick={prevSlide}
        >
          <FiChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-2 bg-black bg-opacity-40 p-2 rounded-full text-white transform -translate-y-1/2 hover:bg-opacity-60 transition"
          onClick={nextSlide}
        >
          <FiChevronRight size={20} />
        </button>

        {/* Guest Favorite Badge */}
        {isGuestFavorite && (
          <span className="absolute top-3 left-3 bg-white px-3 py-1 text-xs font-semibold rounded-md shadow-md">
            Guest Favorite
          </span>
        )}

        {/* Heart Icon & File Upload Icon */}
        <button
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
          onClick={() => setLiked(!liked)}
        >
          {!isDownloadIcon ? (
            liked ? <FaHeart className="text-red-500 text-lg" /> : <FaRegHeart className="text-gray-500 text-lg" />
          ) : (
            <FiUpload className="text-black text-lg" />
          )}
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? "bg-white scale-125" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900 truncate">{location}</h3>
          {rating && <div className="text-xs text-gray-700">⭐ {rating}</div>}
        </div>
        <p className="text-xs text-gray-500 truncate">{description}</p>
        <p className="text-xs text-gray-500">{dateRange}</p>
        <p className="text-lg font-semibold mt-1">{price}</p>
      </div>
    </div>
  );
};

export default ImageCard;
