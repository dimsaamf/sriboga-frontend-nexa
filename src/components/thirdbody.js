import React, { useState } from "react";
import doublezero1 from "../assets/doublezero1.png";
import doublezero2 from "../assets/doublezero2.png";
import dzputih1 from "../assets/dzputih1.png";
import dzputih2 from "../assets/dzputih2.png";
import beruangbiru1 from "../assets/beruangbiru1.png";
import beruangbiru2 from "../assets/beruangbiru2.png";
import yokozuna1 from "../assets/yokozuna1.png";
import yokozuna2 from "../assets/yokozuna2.png";

const Card = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full transition-opacity duration-1000 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={product.hoverImage}
          alt={product.name}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <h3 className="text-center text-lg mt-4">{product.name}</h3>
      <button className="block mx-auto mt-4 px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300">
        See Product
      </button>
    </div>
  );
};

const products = [
  {
    name: "Tepung Terigu Double Zero",
    image: doublezero1,
    hoverImage: doublezero2,
  },
  {
    name: "Tepung Terigu Double Zero",
    image: dzputih1,
    hoverImage: dzputih2,
  },
  {
    name: "Tepung Terigu Beruang Biru",
    image: beruangbiru1,
    hoverImage: beruangbiru2,
  },
  {
    name: "Tepung Terigu Yokozuna",
    image: yokozuna1,
    hoverImage: yokozuna2,
  },
];

const ThirdBody = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Superior Product
      </h2>
      <div className="flex justify-between items-center mb-4">
        <span></span>
        <a href="#" className="text-blue-600">
          See all products
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ThirdBody;
