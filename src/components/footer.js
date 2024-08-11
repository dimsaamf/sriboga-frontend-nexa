import React from "react";
import sribogaLogo from "../assets/logofooter.png";
import { TbPhoneCall } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-biru-footer text-white py-14 px-48">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-24 mb-8 md:mb-10">
              <div class>
                <h3 className="text-2xl font-normal mb-5 text-center md:text-left">
                  Tentang Kami
                </h3>
                <ul className="text-2xl font-normal mb-5 text-center md:text-left">
                  <li>
                    <a href="#" className="hover:underline">
                      Produk
                    </a>
                  </li>
                </ul>
                <ul className="text-2xl font-normal mb-5 text-center md:text-left">
                <li>
                    <a href="#" className="hover:underline">
                      Inspirasi Baking
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-normal mb-5 text-center md:text-left">
                  Baking & Consulting
                </h3>
                <ul className="text-2xl font-normal mb-5 text-center md:text-left">
                  <li>
                    <a href="#" className="hover:underline">
                      Pemberdayaan UKM
                    </a>
                  </li>
                </ul>
                <ul className="text-2xl font-normal mb-5 text-center md:text-left">
                <li>
                    <a href="#" className="hover:underline">
                      Acara
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-normal mb-5 text-center md:text-left">
                  Hubungi Kami
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row my-4">
              <TbPhoneCall size={100} className="mr-5 text-white" />
              <div className="text-2xl text-center md:text-left">
                <span>Customer Care</span>
                <p className="font-bold text-4xl font-sriboga1">0-800-140-1109</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-start w-96">
            <div className="flex flex-col items-start">
              <img src={sribogaLogo} alt="Sriboga Logo" className="mb-4 h-24 w-auto" />
              <h3 className="mb-2 text-2xl text-center md:text-left">Follow Us</h3>
              <div className="flex space-x-14 mb-24">
                <FaInstagram size={40} className=" text-white" />
                <FaFacebook size={40} className=" text-white" />
                <FaXTwitter size={40} className="text-white" />
              </div>
            </div>
            <p className="text-2xl text-center md:text-left">
              &copy; 2024 Develop by NEXA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;