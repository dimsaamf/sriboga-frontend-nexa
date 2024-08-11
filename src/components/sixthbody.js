import React from "react";
import image1 from "../assets/story1.jpg";
import image2 from "../assets/story2.jpg";

const SixthBody = () => {
  return (
    <div className="container mx-auto px-4 py-20 mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[50px] font-normal mb-4">Our Newest Story</h2>
        <a href="#" className="text-biru-sriboga font-sriboga1 text-xl">
          See all stories
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="story-card">
          <img
            src={image1}
            alt="Story 1"
            className="w-[700px] h-[350px] rounded-3xl mb-3"
          />
          <div className="p-2">
            <h3 className="text-4xl font-semibold mb-14">Story 1</h3>
            <p className="text-black text-3xl">14 Januari 2023</p>
          </div>
        </div>
        <div className="story-card">
          <img
            src={image2}
            alt="Story 2"
            className="w-[700px] h-[350px] rounded-3xl mb-3"
          />
          <div className="p-2">
            <h3 className="text-4xl font-semibold mb-14">Story 2</h3>
            <p className="text-black text-3xl">14 Januari 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthBody;
