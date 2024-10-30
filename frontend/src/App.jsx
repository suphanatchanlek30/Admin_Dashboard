// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';           // นำเข้า Home
import Analytics from './pages/Analytics.jsx'; // นำเข้า Analytics
import Settings from './pages/Settings.jsx';   // นำเข้า Settings

function App() {
  return (
    <Router>
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white">
          <h2 className="text-xl p-4">Dashboard</h2>
          <nav>
            <ul>
              <li>
                <Link to="/" className="block p-4 hover:bg-gray-700">Home</Link>
              </li>
              <li>
                <Link to="/analytics" className="block p-4 hover:bg-gray-700">Analytics</Link>
              </li>
              <li>
                <Link to="/settings" className="block p-4 hover:bg-gray-700">Settings</Link>
              </li>
            </ul>
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-4">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
