// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Favorites from './pages/Favorites.jsx';
import Products from './pages/Products.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex">
        {/* Sidebar ซ้ายสุด */}
        <aside className="w-64 bg-gray-800 text-white">
          <h2 className="text-xl p-4">DashStack</h2>
          <nav>
            <ul>
              <li>
                <Link to="/" className="block p-4 hover:bg-gray-700">Dashboard</Link>
              </li>
              <li>
                <Link to="/products" className="block p-4 hover:bg-gray-700">Products</Link>
              </li>
              <li>
                <Link to="/favorites" className="block p-4 hover:bg-gray-700">Favorites</Link>
              </li>
            </ul>
          </nav>
        </aside>
        
        {/* Main Content */}
        {/* เนื้อหาของแต่ละหน้า */}
        <main className="flex-1 bg-gray-100 p-4">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Favorites />} />
            <Route path="/settings" element={<Products />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
