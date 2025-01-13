import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center bg-black bg-opacity-35  py-8">
      <div className="flex items-center justify-center gap-6 text-sm pb-3 text-neutral-400 font-semibold">
        <Link to="/">About</Link>
        <Link to="/">Contact us</Link>
      </div>
      <p className="text-2xl text-neutral-300 font-bold">Watch and Enjoy!</p>
    </footer>
  );
};

export default Footer;
