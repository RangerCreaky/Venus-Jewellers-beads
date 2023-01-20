import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="text-[#D2AC47] body-font bg-[#FFFFF4] border-b-2 border-[#D2AC47] fixed w-full z-10">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <div className="flex bg-white p-2 rounded-lg">
              <img
                className="w-12 h-12 "
                src="./images/logo/logo.png"
                alt="logo"
              />
              <img
                className="w-32 h-12"
                src="./images/logo/logo-text.png"
                alt="logo"
              />
            </div>
          </NavLink >
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/"
              className="mr-5 hover:text-gray-900 cursor-pointer font-medium tracking-widest uppercase text-lg"
            >
              Home
            </NavLink >
            <NavLink
              to="/shop"
              className="mr-5 hover:text-gray-900 cursor-pointer font-medium tracking-widest uppercase text-lg"
            >
              Shop
            </NavLink >
            <NavLink
              to="/about"
              className="mr-5 hover:text-gray-900 cursor-pointer font-medium tracking-widest uppercase text-lg"
            >
              About
            </NavLink >
            <NavLink
              to="/contact"
              className="mr-5 hover:text-gray-900 cursor-pointer font-medium tracking-widest uppercase text-lg"
            >
              Contact
            </NavLink >
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
