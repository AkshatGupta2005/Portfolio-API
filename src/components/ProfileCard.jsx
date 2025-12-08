import React, { useState } from 'react';

const ProfileCard = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  return (
    <div className="card profile-card">
      <div className="profile-image-container">
        {isLoading && <div className="loading-spinner"></div>}
        <img 
          src="/images/profile-pic.jpg" 
          alt="Profile picture of Akshat Gupta, a software developer and innovator" 
          title="Akshat Gupta"
          className="profile-image"
          onLoad={handleImageLoad}
          onError={handleImageError}
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
