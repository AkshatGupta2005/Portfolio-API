import React from 'react';

const SkillsCard = () => {
  return (
    <div className="card skills-card">
      <h2>What I Learned</h2>
      <div className="skills-grid">
        <div className="skill-tag">MERN</div>
        <div className="skill-tag">UI/UX</div>
        <div className="skill-tag">AWS</div>
        <div className="skill-tag">Postgres</div>
        <div className="skill-tag">Native</div>
        <div className="skill-tag">Python</div>
        <div className="skill-tag wide">And A Lot More</div>
      </div>
    </div>
  );
};

export default SkillsCard;
