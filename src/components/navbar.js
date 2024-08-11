import React, { useState } from "react";
import sribogaLogo from "../assets/sribogaLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container p-4 mx-auto flex flex-col items-center">
        <div className="text-xl font-bold mb-2">
          <img
            src={sribogaLogo}
            alt="Sriboga Logo"
            className="mx-auto"
            style={{ maxWidth: "200px", height: "auto" }}
          />
        </div>
        </div>
        <div className="mx-auto w-full p-5 bg-cream-sriboga flex flex-col items-center">
        <div className="hidden md:flex space-x-4 mt-2">
          <a href="#" className="text-blue-600">
            Tentang Kami
          </a>
          <a href="#" className="text-blue-600">
            Produk
          </a>
          <a href="#" className="text-blue-600">
            Inspirasi <i>Baking</i>
          </a>
          <a href="#" className="text-blue-600">
            <i>Baking & Consulting</i>
          </a>
          <a href="#" className="text-blue-600">
            Pemberdayaan UKM
          </a>
          <a href="#" className="text-blue-600">
            Acara
          </a>
          <a href="#" className="text-blue-600">
            Hubungi Kami
          </a>
        </div>
        <div className="md:hidden mt-2">
          <button
            id="menu-button"
            className="text-blue-600"
            onClick={toggleMenu}
          >
            Menu
          </button>
        </div>
        <div className={`md:hidden mt-2 w-full ${menuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col items-center space-y-2 mt-2">
            <a href="#" className="text-blue-600">
              Tentang Kami
            </a>
            <a href="#" className="text-blue-600">
              Produk
            </a>
            <a href="#" className="text-blue-600">
              Inspirasi <i>Baking</i>
            </a>
            <a href="#" className="text-blue-600">
              <i>Baking & Consulting</i>
            </a>
            <a href="#" className="text-blue-600">
              Pemberdayaan UKM
            </a>
            <a href="#" className="text-blue-600">
              Acara
            </a>
            <a href="#" className="text-blue-600">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;