
import React from 'react'

import { FaHeart, FaSearch,FaUser, } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center pl-10 ">
        <div className="font-bold text-5xl text-center pb-4 sm:pb-0 text-black">
            LOGO
        </div>
        <div className="w-full sm:w-75 md:w-[70%] relative">
             <input className="border-gray-200 border p-2 px-4 rounded-xl w-full" 
             type="text" name="searchBar" placeholder="Enter any product name..." />

             <FaSearch className=" absolute right-0 top-0 mr-3 mt-3 text-gray-400" size={20} />
        </div>
        <div className="hidden lg:flex gap-4 text-gray-500 text-3xl"> <FaUser /> </div>
        <div className="hidden lg:flex text-gray-500 text-3xl"> <FaHeart /> </div>
        <div className="hidden lg:flex text-gray-500 text-3xl"> <HiOutlineShoppingBag /> </div>
      </div>
    </div>
  )
}

export default HeaderMain;
