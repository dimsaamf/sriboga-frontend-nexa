import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto w-full p-4 bg-cream-sriboga flex flex-col items-center">
        <div className="hidden md:flex space-x-10">
          <a href="#" className="text-biru-sriboga font-sriboga1 text-xl">
            Tentang Kami
          </a>
          <a href="#" className="text-biru-sriboga font-sriboga1 text-xl">
            Produk
          </a>
          <a href="#" className="text-biru-sriboga font-sriboga1 text-xl">
            Inspirasi <i>Baking</i>
          </a>
          <a href="#" className="text-biru-sriboga font-sriboga1 text-xl">
            <i>Baking & Consulting</i>
          </a>
          <a href="#" className="text-biru-sriboga font-sriboga1 text-xl">
            Pemberdayaan UKM
          </a>
          <a href="#" className="text-biru-sriboga font-sriboga1 text-xl">
            Acara
          </a>
          <a href="#" className="text-biru-sriboga font-sriboga1 text-xl">
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
