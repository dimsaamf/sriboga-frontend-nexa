import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import jumbotron1 from "../assets/jumb1.png";
import jumbotron2 from "../assets/jumb2.png";
import jumbotron3 from "../assets/jumb3.png";
import jumbotron4 from "../assets/jumb4.png";
import jumbotron5 from "../assets/jumb5.png";

const Jumbotron = () => {
  return (
    <div className="w-full">
      <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop>
        <div className="relative">
          <img src={jumbotron1} alt="Slide 1" className="w-full h-auto" />
        </div>
        <div className="relative">
          <img src={jumbotron2} alt="Slide 2" className="w-full h-auto" />
        </div>
        <div className="relative">
          <img src={jumbotron3} alt="Slide 3" className="w-full h-auto" />
        </div>
        <div className="relative">
          <img src={jumbotron4} alt="Slide 4" className="w-full h-auto" />
        </div>
        <div className="relative">
          <img src={jumbotron5} alt="Slide 5" className="w-full h-auto" />
        </div>
        {/* Tambahkan slide tambahan sesuai kebutuhan */}
      </Carousel>
    </div>
  );
};

export default Jumbotron;