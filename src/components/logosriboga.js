import React from "react";
import sribogaLogo from "../assets/sribogaLogo.png";

const SribogaLogo = () => {
  return (
    <div className="bg-white text-xl font-bold mb-2 p-4 sticky top-0 z-50">
      <img
        src={sribogaLogo}
        alt="Sriboga Logo"
        className="mx-auto"
        style={{ maxWidth: "180px", height: "auto" }}
      />
    </div>
  );
};

export default SribogaLogo;
