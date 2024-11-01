// SearchBar.js
import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className='search relative'>
      <div>
        <IoSearchOutline className='absolute left-4 text-[20px] top-1/2 transform -translate-y-1/2 text-[#000000] opacity-[50%]' />
        <input
          type="search"
          placeholder='Search'
          className='w-[338px] h-[38px] bg-[#F5F6FA] placeholder-[#202224]-[50%] border outline-none p-3 border-[#D5D5D5] rounded-[19px] pl-10'
        />
      </div>
    </div>
  );
};

export default SearchBar;
