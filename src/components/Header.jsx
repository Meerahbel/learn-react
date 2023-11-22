import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleMenu = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <header className="relative flex justify-between items-center bg-[#3ebfff] w-full px-5 py-5">
      <div>
        <h3 className="text-white font-bold text-2xl">
          <Link to="/">sunnyside</Link>
        </h3>
      </div>
      <div onClick={handleMenu} className="md:hidden">
        <img
          src="/images/icon-hamburger.svg"
          alt="hamburger icon"
          className="w-6 h-5"
        />
      </div>
      <ul className="hidden md:flex items-center gap-10 text-white">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>Services</li>
        <li>Projects</li>
        <li>
          <button className="text-black font-semibold bg-white py-2 px-5 rounded-full">
            CONTACT
          </button>
        </li>
      </ul>

      {/*  mobile dropdown */}
      {dropdown && (
        <ul className="absolute z-10 top-[70px] left-[50%] translate-x-[-50%] flex flex-col items-center gap-5 text-black/60 bg-white w-[90%] py-10 text-2xl font-medium md:hidden">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>
            <button className="bg-[#fbd600] py-2 px-5 rounded-full">
              CONTACT
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
