import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MenuBar from "./components/layout/MenuBar";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <MenuBar />
        <main className="flex-grow max-w-screen-xl mx-auto py-6 px-2 sm:px-4 lg:px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listing" element={<Listings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
