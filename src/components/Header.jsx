import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../styles/header.css';

const Header = () => {
  const links = [
    { path: '/', text: 'Rockets' },
    { path: 'missions', text: 'Missions' },
    { path: 'profile', text: 'User' },
  ];

  return (
    <div>
      <header className="header">
        <div>
          <img className="logo" src={Logo} alt="logo" />
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
