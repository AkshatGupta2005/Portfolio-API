import React from 'react';

const NavCard = () => {
  return (
    <div className="card nav-card">
      <div className="logo-container">
        <img 
          src="/images/logo.png" 
          alt="Logo" 
          className="logo-img"
        />
      </div>
      <div className="nav-links">
        <span className="nav-item active">Home</span>
        <span className="nav-item">Posts</span>
        <span className="nav-item">Projects</span>
      </div>
    </div>
  );
};

export default NavCard;
