import React from "react";
//import logo from "../assets/logo.png"; // Adjust path based on folder structure

const Header = () => {
  return (
    <header className="mb-8 flex flex-row items-center ">
      <img
        src="https://res.cloudinary.com/dmqpae4lu/image/upload/v1741332684/Luxury%20Hotel.webp"
        alt="Recipe Contest Logo"
        className="w-16 h-16 mb-4 rounded-full object-cover"
      />
      <div className="ml-10">
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
          Recipe Contest
        </h1>
        <p className="mt-2 text-gray-600 ">
          Discover and share amazing recipes!
        </p>
      </div>
    </header>
  );
};

export default Header;
