import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../assets/jco.png";
import logo2 from "../assets/mieburung.png";
import logo3 from "../assets/pizzahut.png";
import logo4 from "../assets/marugame.png";
import logo5 from "../assets/ajinomoto.png";
import logo6 from "../assets/nissin.png";
import logo7 from "../assets/sariroti.png";

//Marquee
const SecondBody = () => {
  return (
    <div className="w-full mx-auto my-8 p-10 bg-cream-sriboga">
      <h2 className="text-3xl font-bold text-center mb-8">Our Client Trust</h2>
      <Marquee speed={50} gradient={false}>
        <div className="flex items-center space-x-10">
          <img src={logo1} alt="Logo 1" className="h-20" />
          <img src={logo2} alt="Logo 2" className="h-20" />
          <img src={logo3} alt="Logo 3" className="h-20" />
          <img src={logo4} alt="Logo 4" className="h-20" />
          <img src={logo5} alt="Logo 5" className="h-20" />
          <img src={logo6} alt="Logo 6" className="h-20" />
          <img src={logo7} alt="Logo 7" className="h-20" />
          
          <img src={logo1} alt="Logo 1" className="h-20" />
          <img src={logo2} alt="Logo 2" className="h-20" />
          <img src={logo3} alt="Logo 3" className="h-20" />
          <img src={logo4} alt="Logo 4" className="h-20" />
          <img src={logo5} alt="Logo 5" className="h-20" />
          <img src={logo6} alt="Logo 6" className="h-20" />
          <img src={logo7} alt="Logo 7" className="h-20" />
        </div>
      </Marquee>
    </div>
  );
};

export default SecondBody;