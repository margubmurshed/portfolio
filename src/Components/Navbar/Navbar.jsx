import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BsSunFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 2, text: "Services" },
    { id: 3, text: "Skills" },
    { id: 3, text: "Projects" },
    { id: 3, text: "Contact" },
  ];
  return (
    <nav className="bg-white border-b sticky top-0">
      <div className="container mx-auto p-5 flex justify-between items-center gap-3">
        <img src={logo} alt="logo" className="w-32 select-none" />
        <div className="flex items-center gap-5">
          {isOpen ? (
            <GrClose
              size={30}
              className="cursor-pointer lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <HiBars3
              size={30}
              className="cursor-pointer lg:hidden"
              onClick={() => setIsOpen(true)}
            />
          )}
          <ul
            className={`gap-7 absolute top-full text-center space-y-3 p-5 bg-white w-full border lg:flex lg:w-auto lg:bg-transparent lg:static lg:border-0 lg:text-left lg:space-y-0 lg:p-0 select-none transition-all duration-300 z-[100] ${
              isOpen ? "block left-0" : "-left-[1024px]"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.text.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="section-active"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <BsSunFill
                size={30}
                className="cursor-pointer hover:text-orange-300 transition"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
