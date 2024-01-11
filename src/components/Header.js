import React from 'react';
import { NavLink } from 'react-router-dom';

import './css/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <div className="image-container">
          <img src="/u.png" alt="logo" />
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              activeStyle={{ borderBottom: '1px solid #DDE6ED' }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              activeStyle={{ borderBottom: '1px solid #DDE6ED' }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeStyle={{ borderBottom: '1px solid #DDE6ED' }}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
