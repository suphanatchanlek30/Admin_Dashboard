import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiMail, FiList, FiArchive } from 'react-icons/fi';
import { IoMdHeartEmpty } from "react-icons/io";
import { TbClockCode } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";

const Navbar = () => {
  const navLinks = [
    { path: '/', label: 'Dashboard', icon: <TbClockCode /> },
    { path: '/products', label: 'Products', icon: <AiOutlineProduct /> },
    { path: '/favorites', label: 'Favorites', icon: <IoMdHeartEmpty /> },
    { path: '/inbox', label: 'Inbox', icon: <FiMail /> },
    { path: '/orderlist', label: 'Order Lists', icon: <FiList /> },
    { path: '/productstock', label: 'Product Stock', icon: <FiArchive /> },
  ];

  return (
    <nav className="text-center">
      <ul className="w-[240px] h-[50px]">
        {navLinks.map((link, index) => (
          <li key={index} className="mb-2">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `flex items-center text-center pl-10 w-full h-[50px] text-[14px] text-[#202224] tracking-[0.3px] font-body font-semibold ${
                  isActive ? 'bg-blue-500 text-white rounded-[6px]' : ''
                }`
              }
            >
              <span className="mr-4">{link.icon}</span>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;