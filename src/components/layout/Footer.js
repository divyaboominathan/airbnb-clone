import React from "react";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Support */}
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="text-sm text-gray-600">
              {["Help Centre", "AirCover", "Anti-discrimination", "Disability support", "Cancellation options", "Report neighbourhood concern"].map(
                (item) => (
                  <li key={item} className="mb-4 last:mb-0">
                    <a href="#">{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 2: Hosting */}
          <div>
            <h3 className="font-semibold mb-2">Hosting</h3>
            <ul className="text-sm text-gray-600">
              {["Airbnb your home", "AirCover for Hosts", "Hosting resources", "Community forum", "Hosting responsibly", "Join a free Hosting class", "Find a co-host"].map(
                (item) => (
                  <li key={item} className="mb-4 last:mb-0">
                    <a href="#">{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Airbnb */}
          <div>
            <h3 className="font-semibold mb-2">Airbnb</h3>
            <ul className="text-sm text-gray-600">
              {["Newsroom", "New features", "Careers", "Investors", "Airbnb.org emergency stays"].map(
                (item) => (
                  <li key={item} className="mb-4 last:mb-0">
                    <a href="#">{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} Airbnb, Inc. ·{" "}
            <a href="#">Privacy</a> · <a href="#">Terms</a> ·{" "}
            <a href="#">Sitemap</a> · <a href="#">Company details</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center">
              <span className="mr-1">
                <FaGlobe className="text-gray-600 hidden md:inline-block" />
              </span>
              English (IN)
            </a>
            <a href="#" className="flex items-center">
              <span className="mr-1">₹</span> INR
            </a>
            {["https://i.pinimg.com/564x/0e/5b/43/0e5b43ccd664c5fe6d470360a4604071.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEeHgbGz-N7FyHT4pQrZhOLHxEiBS8EpLMXQ&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5AsSMiGiLDJG-8tGM4zivsEywuliqy2dEsg&s"].map(
              (src) => (
                <a key={src} href="#" className="flex items-center">
                  <img src={src} alt="Social Icon" className="w-5 h-5" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;