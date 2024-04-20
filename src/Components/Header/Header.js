import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const links = [
    { name: "Home", link: "" },
    { name: "Products", link: "products" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-slate-200 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-2 pt-2">
            <ion-icon name="cart-outline"></ion-icon>
          </span>
          Shop
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 
        absolute md:static bg-slate-200 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
        transition-all duration-500 ease-in ${
          open ? "top-20 opacity-100" : "top-[-500px]"
        } md:opacity-100`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link className="text-gray-800 hover:text-gray-400 duration-300" to={`/${link.link}`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
