// NavbarTopbar.js
import React from 'react';
import MenuIcon from './MenuIcon';
import Notification from './Notification';
import LanguageSelector from './LanguageSelector';
import SearchBar from './SearchBar';
import ProfileDropdown from './ProfileDropdown ';
import useNavbar from './../hooks/useNavbar';

const NavbarTopbar = () => {
  // ใช้ Custom Hook
  const {
    showLanguage,
    setShowLanguage,
    selectedLang,
    setSelectedLang,
    notificationCount,
    languages
  } = useNavbar();

  return (
    <div className='flex justify-between bg-white w-full h-[70px] items-center font-body'>
      {/* Left */}
      <div className='flex space-x-6 items-center ml-4'>
        {/* Menu Icon */}
        <MenuIcon />

        {/* Search Bar */}
        <SearchBar />
      </div>

      {/* Right */}
      <div className='flex space-x-6 items-center mr-4'>
        {/* Notification */}
        <Notification count={notificationCount} />

        {/* Language Selector */}
        <LanguageSelector 
          languages={languages}
          selectedLang={selectedLang}
          setSelectedLang={setSelectedLang}
          showLanguage={showLanguage}
          setShowLanguage={setShowLanguage}
        />

        {/* Profile */}
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default NavbarTopbar;
