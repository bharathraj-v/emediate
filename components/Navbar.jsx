import React from "react";
import Link from "next/link";
import { RiLoginBoxFill } from "react-icons/ri"; 

const Navbar = () => {
    return (
        <>
  <nav className="bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px- md:px-6 py-4">
      <Link 
      href={"/"} passHref
      className="flex items-center">
        <button>
        <span className="self-center text-xl font-bold 
        hover:font-bold
        hover:text-blue-800
        whitespace-nowrap dark:text-white">
          E-Mediate
        </span>
        </button>
      </Link>
      <div className="flex items-center">
        <Link
          href={"/login"} passHref
        >
            <div className="flex space-x-2 items-center
             hover:space-x-4 
             hover:animate-pulse transition-all duration-800 ease-in-out"> 
            < RiLoginBoxFill className="text-blue-600"/>
          <p className="text-sm font-medium cursor-pointer
           text-blue-600 dark:text-blue-500">
            Admin
            </p>
            </div>
        </Link>
      </div>
    </div>
  </nav>
  <nav className="bg-gray-700">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 py-1 md:px-6">
        <p className="text-center text-slate-300 text-sm  py-2">
            Access your Arbitration and Mediation Documents
        </p>
      <div className="flex items-center">
        <ul className="flex flex-row space-x-10 text-sm font-medium">
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-500"
              aria-current="page"
            >
              Register
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-500"
            >
              Case History
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</>
    )
}

export default Navbar;