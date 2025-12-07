import React from 'react';

const ProfileCard = () => {
  return (
    <div className="card profile-card">
      <div className="profile-image-container">
        <img 
          src="/images/profile-pic.jpg" 
          alt="Akshat Gupta" 
          className="profile-image"
        />
      </div>
      <div className="profile-info">
        <h1>Akshat Gupta</h1>
        <p className="profile-bio">
          Building, Creating,<br />
          Writing and Solving.<br />
          <strong>Innovating.</strong>
        </p>
        <p className="profile-location">
          Bhopal, Madhaya Pradesh,<br />
          India
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
