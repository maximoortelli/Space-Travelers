import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/planet.png';
import '../styles/header.css';

const Header = () => {
  const links = [
    { path: '/', text: 'Rockets' },
    { path: 'missions', text: 'Missions' },
    { path: 'profile', text: 'My Profile' },
  ];

  return (
    <div>
      <header className="header">
        <div>
          <img src={Logo} alt="logo" />
          <h1>Space Traveler&apos;s Hub</h1>
        </div>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.text.toLowerCase()}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
