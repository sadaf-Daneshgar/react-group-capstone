import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/planet.png';
import '../style/navbar.css';

function Navigation() {
  const location = useLocation();
  return (
    <header>
      <nav className="navbar">
        <li className="logo">
          <img src={Logo} alt="Logo" />
          <p className="title">Space Travelers&apos; Hub</p>
        </li>
        <li>
          <ul className="nav-item-bar">
            <li className="nav-item">
              <NavLink
                className={location.pathname === '/rockets' ? 'active' : ''}
                to="/rockets"
              >
                Rockets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/missions"
                className={location.pathname === '/missions' ? 'active' : ''}
              >
                Missions
              </NavLink>
            </li>
            <div className="line" />
            <li className="nav-item">
              <NavLink
                to="/myprofile"
                className={location.pathname === '/myprofile' ? 'active' : ''}
              >
                My Profile
              </NavLink>
            </li>
          </ul>
        </li>
      </nav>
    </header>
  );
}

export default Navigation;
