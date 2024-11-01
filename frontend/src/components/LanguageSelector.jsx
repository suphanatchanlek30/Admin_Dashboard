// LanguageSelector.js
import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BiCheck } from 'react-icons/bi';

const LanguageSelector = ({ languages, selectedLang, setSelectedLang, showLanguage, setShowLanguage }) => {
  const handleLanguageSelect = (langCode) => {
    setSelectedLang(langCode);
    setShowLanguage(false);
  };

  return (
    <div className='relative w-[140px]'>
      <button 
        onClick={() => setShowLanguage(!showLanguage)}
        className='flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg'
      >
        <img 
          src={languages.find(lang => lang.code === selectedLang)?.flag}
          alt="Selected Language"
          className='w-[40px] h-[27px] rounded-md'
        />
        <span className='text-gray-700'>
          {languages.find(lang => lang.code === selectedLang)?.name}
        </span>
        <MdKeyboardArrowDown className='w-5 h-5 text-gray-600' />
      </button>

      {/* Language Dropdown */}
      {showLanguage && (
        <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 p-2 z-50'>
          <div className='px-3 py-2 text-sm text-gray-600 border-b border-gray-100'>
            Select Language
          </div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className='flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md'
            >
              <img 
                src={lang.flag}
                alt={lang.name}
                className='w-[40px] h-[27px]'
              />
              <span>{lang.name}</span>
              {lang.code === selectedLang && (
                <BiCheck className='ml-auto w-5 h-5 text-blue-500' />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
