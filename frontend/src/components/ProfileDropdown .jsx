import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { IoKeyOutline } from "react-icons/io5";
import { IoRefreshOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import people from "../assets/Topbar/people.svg";

const ProfileDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const menuItems = [
    {
      icon: <LuUser2 className="w-5 h-5 text-blue-400" />,
      label: 'Manage Account'
    },
    {
      icon: <IoKeyOutline className="w-5 h-5 text-pink-400" />,
      label: 'Change Password'
    },
    {
      icon: <IoRefreshOutline className="w-5 h-5 text-purple-400" />,
      label: 'Activity Log'
    },
    {
      icon: <IoLogOutOutline className="w-5 h-5 text-red-400" />,
      label: 'Log out'
    }
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg"
      >
        <img 
          src={people}
          alt="Profile" 
          className="w-8 h-8 rounded-full"
        />
        <div className="hidden md:block text-left">
          <div className="text-sm font-medium text-gray-700">Moni Roy</div>
          <div className="text-xs text-gray-500">Admin</div>
        </div>
        <MdKeyboardArrowDown className={`w-5 h-5 text-gray-600 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;