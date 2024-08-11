import React from "react";
import vbg from "../assets/flour.mp4";
import logovid from "../assets/logovid.png";

const FourthBody = () => {
  return (
    <div className="relative w-full h-[700px] ">
      <video
        className="absolute top-0 left-0 w-full h-[700px] object-cover"
        src={vbg}
        autoPlay
        loop
        muted
      />
      <div className="bg-biru-sriboga bg-opacity-70 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-5xl font-normal mb-9">
          From us to your favorite <br />
          <span className="mt-2 block">dish</span>
        </h2>
        <p className="text-lg md:text-xl mb-8 mx-[650px]">
          We’re passionate about feeding the ones we love delicious dishes made
          from the highest quality ingredients. Get inspired for your next meal
          or baking project by browsing through our library of original recipes
          featuring our ancient and heritage grains.
        </p>
        <button className="text-2xl px-6 py-3 bg-transparent border border-white text-white rounded hover:bg-white hover:text-blue-600 transition duration-300">
          Discover recipes
        </button>
        <img
          src={logovid}
          alt="Inspirasi Baking Logo"
          className="mt-8 h-20"
        />
      </div>
    </div>
  );
};

export default FourthBody;