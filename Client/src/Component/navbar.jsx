// src/components/Navbar.js
import React from 'react';
import { FaHome, FaChartLine, FaBell } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 h-14 flex items-center justify-between px-6">
      {/* Left Section - Nav Items */}
      <div className="flex flex-1 justify-center items-center space-x-6">
        <ul className="flex items-center space-x-4 text-white">
          {/* Active Tab - Dashboard */}
          <li className="flex items-center space-x-1 px-3 py-1 bg-blue-600 rounded-md shadow-md">
            <FaHome className="text-white" />
            <span className="font-semibold">Dashboard</span>
          </li>
          
          {/* Non-Active Tab - Analytics */}
          <li className="flex items-center space-x-1 hover:bg-blue-600 px-3 py-1 rounded-md transition">
            <FaChartLine className="text-white" />
            <span>Analytics</span>
          </li>
        </ul>
      </div>

      {/* Right Section - User Info */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <FaBell className="text-white text-lg" />
          <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center text-white">3</span>
        </div>
        <div className="flex -space-x-2">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User1"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
