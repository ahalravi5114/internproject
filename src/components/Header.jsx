//import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div
        className="mx-auto flex justify-around p-4 items-center bg-black text-white w-[100%]"
        id="main-head"
      >
        <div className="hover:text-[#5151d6]">
          <img></img>
          <button className="text-3xl font-bold">
            <Link to="/">BigLinkz</Link>
          </button>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-center gap-x-10">
            <li className="hover:text-[#5151d6]">
              <Link to="brand">For Brands</Link>
            </li>
            <li className="hover:text-[#5151d6]">
              <Link to="influencers">For Influencers</Link>
            </li>
            <li className="hover:text-[#5151d6]">
              <button
                className="flex items-center justify-center"
                onClick={toggleVisibility}
              >
                Product
                <span className="text-[#5151d6] material-symbols-outlined ">
                  keyboard_arrow_down
                </span>
              </button>
            </li>
            <li className="hover:text-[#5151d6]">
              <button className="flex items-center justify-center">
                Resources
                <span className="text-[#5151d6] material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </button>
            </li>
            <li className="hover:text-[#5151d6]">
              <Link to="pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="justify-end hidden gap-4 md:flex ">
          <button className="flex items-center justify-center p-3 px-10 font-bold text-[#5151d6] border border-[#5151d6] bg-blue-50 rounded-xl ">
            Login
            <span className="material-symbols-outlined">north_east</span>
          </button>
          <button className="flex items-center justify-center p-3 px-10 font-bold text-white bg-[#5151d6] hover:bg-[#3f3fa8] rounded-xl">
            Book a Demo
            <span className="material-symbols-outlined">north_east</span>
          </button>
        </div>
        <div className="md:hidden" id="menu-btn">
          <button
            onClick={() => {
              document.getElementById("headermd").classList.toggle("hidden");
              document.getElementById("menu-btn").classList.toggle("hidden");
              document.getElementById("main-head").classList.toggle("hidden");
              console.log(document.getElementById("main-head").classList);
            }}
          >
            <span className="material-symbols-outlined">menu_open</span>
          </button>
          
        </div>
       
      </div>
      <div className="mx-20">{isVisible && <Dropdown />}</div>
      <Navbar/>
    </>
  );
};
export default Header;
