import { Link } from "react-router-dom";
import ImageCard from './../components/ImageCard';
import { sampleIconData } from './../data/Data';

const listings = [
  { id: 1, title: "Luxury Villa", image: "https://lens.usercontent.google.com/image?vsrid=CMmD8e3j1Zi32QEQAhgBIiQ2ZWYyNmI5My05OWM1LTQ4MGYtOTY2Mi1lN2YzODEzZDRmZDc&gsessionid=UHB4uQgj-OOGhD0-QjyVHClxRBopys1qGFTiv4rBeEIUDYJY_KlPMQ" },
  { id: 2, title: "Cozy Apartment", image: "https://source.unsplash.com/400x300/?apartment" },
  { id: 3, title: "Beach House", image: "https://source.unsplash.com/400x300/?beach-house" },
];

const Listings = () => {
  return (
    <div>
      {/* <h2 className="text-3xl font-semibold mb-6">Featured Listings</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* {listings.map((listing) => (
          <div key={listing.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{listing.title}</h3>
              <Link to={`/details/${listing.id}`} className="text-red-500 hover:underline">
                View Details
              </Link>
            </div>
          </div>
        ))} */}
        {sampleIconData.map((item, index) => (
          <ImageCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
