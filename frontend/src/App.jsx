import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Favorites from './pages/Favorites.jsx';
import Products from './pages/Products.jsx';
import Navbar from './components/Navbar.jsx';
import Inbox from './pages/Inbox.jsx';
import OrderLists from './pages/OrderLists.jsx';
import ProductStock from './pages/ProductStock.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex">
        {/* Sidebar ซ้ายสุด */}
        <aside className="w-[240px] bg-white text-black justify-center">
          <h2 className="text-[20px] font-extrabold my-[27px] font-body text-[#202224] text-center items-center"><span className='text-[#4880FF]'>Dash</span>Stack</h2>
          <Navbar/>
        </aside>
        
        {/* Main Content */}
        {/* เนื้อหาของแต่ละหน้า */}
        <main className="flex-1 bg-gray-100 p-4">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/orderlist" element={<OrderLists />} />
            <Route path="/productstock" element={<ProductStock />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
