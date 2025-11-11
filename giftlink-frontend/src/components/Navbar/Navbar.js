import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link className="navbar-brand" to="/">GiftLink</Link>
      <ul className="navbar-nav flex-row">
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/home.html">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/app">Gifts</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/app/search">Search</Link>
        </li>
      </ul>
    </nav>
  );
}
