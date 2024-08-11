import React from "react";
import Slider from "react-slick";
import bakery1 from "../assets/bakery1.jpg";
import bakery2 from "../assets/bakery2.jpg";
import bakery3 from "../assets/bakery3.jpg";
import bakery4 from "../assets/bakery4.jpg";
import bakery5 from "../assets/bakery5.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FifthBody = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-14">
      <h2 className="text-[50px] font-normal mb-4">Upcoming Baking Class & Demo</h2>
      <Slider {...settings}>
        <div className="story-card p-2">
          <img
            src={bakery1}
            alt="Baking Demo Surabaya"
            className="w-80 h-auto rounded-lg"
          />
          <div className="flex flex-col p-2">
            <div className="flex-1">
              <h3 className="text-3xl font-semibold h-32">
                Baking Demo Surabaya, Come & join us!
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-black text-3xl">14 Januari 2023</p>
            </div>
          </div>
        </div>
        <div className="story-card p-2">
          <img
            src={bakery2}
            alt="Content 2"
            className="w-80 h-auto rounded-lg"
          />
          <div className="flex flex-col p-2">
            <div className="flex-1">
              <h3 className="text-3xl font-semibold h-32">
                Content 2
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-black text-3xl">14 Januari 2023</p>
            </div>
          </div>
        </div>
        <div className="story-card p-2">
          <img
            src={bakery3}
            alt="Content 3"
            className="w-80 h-auto rounded-lg"
          />
          <div className="flex flex-col p-2">
            <div className="flex-1">
              <h3 className="text-3xl font-semibold h-32">
                Content 3
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-black text-3xl">14 Januari 2023</p>
            </div>
          </div>
        </div>
        <div className="story-card p-2">
          <img
            src={bakery4}
            alt="Content 4"
            className="w-80 h-auto rounded-lg"
          />
          <div className="flex flex-col p-2">
            <div className="flex-1">
              <h3 className="text-3xl font-semibold h-32">
                Content 4
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-black text-3xl">14 Januari 2023</p>
            </div>
          </div>
        </div>
        <div className="story-card p-2">
          <img
            src={bakery5}
            alt="Content 5"
            className="w-80 h-auto rounded-lg"
          />
          <div className="flex flex-col p-2">
            <div className="flex-1">
              <h3 className="text-3xl font-semibold h-32">
                Content 5
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-black text-3xl">14 Januari 2023</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
};

export default FifthBody;