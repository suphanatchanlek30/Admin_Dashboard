// useNavbar.js
import { useState } from 'react';
import th from "../assets/Topbar/th.svg";
import uk from "../assets/Topbar/UK.svg";

const useNavbar = () => {
  const [showLanguage, setShowLanguage] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');
  const notificationCount = 6; // จำนวนการแจ้งเตือน

  const languages = [
    { 
      code: 'th', 
      name: 'Thai', 
      flag: th
    },
    { 
      code: 'en', 
      name: 'English', 
      flag: uk
    }
  ];

  return {
    showLanguage,
    setShowLanguage,
    selectedLang,
    setSelectedLang,
    notificationCount,
    languages
  };
};

export default useNavbar;
