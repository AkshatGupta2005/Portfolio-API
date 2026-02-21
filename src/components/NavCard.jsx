import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavCard = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/posts', label: 'Posts' },
    { path: '/projects', label: 'Projects' },
  ];

  const isActive = (path) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <div className="card nav-card">
      <Link to="/" className="logo-container">
        <img 
          src="/images/logo.png" 
          alt="Akshat Gupta's portfolio logo" 
          title="Portfolio Logo"
          className="logo-img"
        />
      </Link>
      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavCard;
