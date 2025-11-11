import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <a className="navbar-brand" href="/">GiftLink</a>
      <ul className="navbar-nav flex-row">
        <li className="nav-item mx-2">
          <a className="nav-link" href="/home.html">Home</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="/app">Gifts</a>
        </li>
      </ul>
    </nav>
  );
}
