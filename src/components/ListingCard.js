import React from "react";

const ListingCard = ({
  imageSrc,
  guestFavorite,
  location,
  rating,
  description,
  dateRange,
  price,
}) => {
  return (
    <div className="w-full max-w-xs rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={imageSrc}
          alt={location}
          className="w-full h-48 object-cover"
        />
        {guestFavorite && (
          <div className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded-full">
            Guest favourite
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Location and Rating */}
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-semibold">{location}</div>
          <div className="text-sm flex items-center">
            <span className="mr-1">★</span> {rating}
          </div>
        </div>

        {/* Description */}
        <div className="text-xs text-gray-600 mb-2">{description}</div>

        {/* Date Range */}
        <div className="text-xs text-gray-600 mb-2">{dateRange}</div>

        {/* Price */}
        <div className="text-sm font-semibold">{price} night</div>

        {/* Show Map Button */}
        {location === "Kotagiri, India" && (
          <button className="mt-2 bg-gray-200 text-xs font-semibold px-3 py-1 rounded-md w-full">
            Show map
          </button>
        )}
      </div>
    </div>
  );
};

export default ListingCard;
