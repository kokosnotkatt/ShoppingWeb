"use client"
import React from 'react'

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className=" border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top_icon">
             <FaFacebook />
            </div>
            <div className="header_top_icon">
             <FaTwitter />
            </div>
            <div className="header_top_icon">
             <FaInstagram />
            </div>
            <div className="header_top_icon">
             <FaLinkedin />
            </div>
          </div>
          <div className="text-gray-500 text-xl">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
          </div>
          <div className="flex gap-6 ">
            <div className="border-2 border-gray-500 rounded-xl">
             <select className="text-gray-500 text-xl w-16" name="currency" id="currency">
              <option value="USD"> USD </option>
              <option value="EUR"> EUR </option>
              <option value="INR">INR</option>
             </select>
            </div>
            <div className="border-2 border-gray-500 rounded-xl">
             <select className="text-gray-500 text-xl w-20" name="language" id="language">
              <option value="english"> english </option>
              <option value="thailand"> thailand </option>
             </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop;
