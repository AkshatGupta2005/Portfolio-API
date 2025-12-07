import React from 'react';

const EducationCard = () => {
  return (
    <div className="card education-card">
      <h2>Where I Learned</h2>
      <div className="edu-list">
        
        <div className="edu-item">
          <div className="edu-header">
            YouTube, Google, Udemy, Some Books and A lot of Mistakes
          </div>
          <div className="edu-sub" style={{ justifyContent: 'flex-end', marginTop: '16px' }}>
            <span>A lifetime</span>
          </div>
        </div>

        <div className="edu-item">
          <div className="edu-header">
            Lakshmi Narain College Of Technology and Science, Bhopal
          </div>
          <div className="edu-degree">B. tech, (Computer Science and Engineering)</div>
          <div className="edu-sub">
            <span>CGPA : Awful</span>
            <span>2023 - Present</span>
          </div>
        </div>

        <div className="edu-item">
          <div className="edu-header">
            Sanskar Academy Higher Secondary School, Sagore, Dhar
          </div>
          <div className="edu-degree">HSC, (Physics, Chemistry, Maths)</div>
          <div className="edu-sub">
            <span>Grade : 70.2%</span>
            <span>2021 - 2023</span>
          </div>
        </div>

        <div className="edu-item">
          <div className="edu-header">
            Alpine Academy, Indore
          </div>
          <div className="edu-degree">SSC</div>
          <div className="edu-sub">
            <span>Grade : 76.8%</span>
            <span>Idk - 2021</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EducationCard;
