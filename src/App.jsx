import React from 'react';
import './styles/App.css';

// Components
import ProfileCard from './components/ProfileCard';
import NavCard from './components/NavCard';
import ConnectCard from './components/ConnectCard';
import WhoAmICard from './components/WhoAmICard';
import SkillsCard from './components/SkillsCard';
import EducationCard from './components/EducationCard';
import WhatIDoCard from './components/WhatIDoCard';
import SymmetryBox from './components/SymmetryBox';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="portfolio-container">
      {/* Top Row - Profile + Nav/Connect */}
      <div className="top-row">
        <div className="profile-wrapper">
          <ProfileCard />
        </div>
        <div className="top-right-stack">
          <NavCard />
          <ConnectCard />
        </div>
      </div>

      {/* Main Grid */}
      <div className="main-grid">
        <WhoAmICard />
        <SkillsCard />
        <EducationCard />
        <WhatIDoCard />
        <SymmetryBox />
      </div>

      <Footer />
    </div>
  );
};

export default App;