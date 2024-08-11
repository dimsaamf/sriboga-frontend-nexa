import React from "react";
import firstbody from "../assets/company.jpg";

const FirstBody = () => {
  return (
    <div className="container mx-auto my-10 py-5 px-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-4">
        <h2 className="text-[50px] font-normal">Pioneer in Flour</h2>
        <h2 className="text-[50px] font-normal mb-4">Innovation</h2>
        <p className="mb-10 mr-56 text-xl">
          PT. Sriboga Raturaya berdiri pada tahun 1995. Pada tahun 2011 berubah
          menjadi PT. Sriboga Flour Mill sebagai pelopor Produsen Tepung Terigu
          yang memiliki gizi tinggi di Indonesia.
        </p>
        <button className="text-2xl px-10 py-2 bg-white text-biru-sriboga border border-biru-sriboga rounded hover:bg-blue-600 hover:text-white transition duration-300">
          Learn more
        </button>
      </div>
      <div className="md:w-1/2 p-4">
        <img
          src={firstbody}
          alt="Sriboga Flour Mill"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default FirstBody;