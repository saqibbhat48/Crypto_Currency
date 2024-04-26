import React from "react";
import { useState } from "react";
import crypto from "../assets/crypto.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const navMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="bg-slate-300">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-2 bg-slate-300">
        <div className="flex gap-2 items-center">
          <img src={crypto} width={60} alt="" />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 hover:text-violet-700 cursor-pointer duration-300 ease-linear">
            <Link to='/'>CryptoCurrencies</Link>
          </h1>
        </div>
        <ul className="hidden gap-10 font-semibold text-slate-950 md:flex">
        <Link to='/'><li className=" hover:text-violet-700 cursor-pointer duration-300 ease-linear hover:bg-slate-100 p-2 rounded-md">Home</li></Link>
          <Link to='/exchanges'><li className=" hover:text-violet-700 cursor-pointer duration-300 ease-linear hover:bg-slate-100 p-2 rounded-md">Exchanges</li></Link>
          <Link to='/news'><li className=" hover:text-violet-700 cursor-pointer duration-300 ease-linear hover:bg-slate-100 p-2 rounded-md">News</li></Link>
        </ul>
        <div className="mr-5 md:hidden">
          <button onClick={navMenu}>
            {menu ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
        </div>
      </nav>

      <div className="gap-10 md:hidden font-semibold text-slate-950 w-48 fixed right-0">
        <ul className={menu ? 'translate-x-[12rem] duration-300 ease-linear' : " bg-slate-300 p-4 ease-linear duration-300"}>
        <Link to='/'><li className=" hover:text-violet-700 cursor-pointer duration-300 ease-linear hover:bg-slate-100 p-2 rounded-md">Home</li></Link>
          <Link to='/exchanges'><li className=" hover:text-violet-700 cursor-pointer duration-300 ease-linear hover:bg-slate-100 p-2 rounded-md">Exchanges</li></Link>
          <Link to='/news'><li className=" hover:text-violet-700 cursor-pointer duration-300 ease-linear hover:bg-slate-100 p-2 rounded-md">News</li></Link>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
