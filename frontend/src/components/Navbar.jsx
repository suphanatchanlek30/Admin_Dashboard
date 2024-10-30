import React from 'react'
import { Link } from 'react-router-dom'

// Sidebar
const Navbar = () => {
    return (
        <nav className='text-center'>
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
                <li>
                    <Link to="/inbox" className="block p-4 hover:bg-gray-700">Inbox</Link>
                </li>
                <li>
                    <Link to="/orderlist" className="block p-4 hover:bg-gray-700">Order Lists</Link>
                </li>
                <li>
                    <Link to="/productstock" className="block p-4 hover:bg-gray-700">Product Stock</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar