// Notification.js
import React from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';

const Notification = ({ count }) => {
  return (
    <div className='relative mr-6'>
      <IoNotificationsOutline className='text-[24px]' />
      {count > 0 && (
        <span className='absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>
          {count}
        </span>
      )}
    </div>
  );
};

export default Notification;
