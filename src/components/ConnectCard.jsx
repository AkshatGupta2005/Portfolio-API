import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ConnectCard = () => {
  return (
    <div className="card connect-card">
      <h2>How to connect</h2>
      <div className="connect-buttons">
        <a href="mailto:akshatguptaip@gmail.com" className="connect-btn">
          <Mail size={22} /> Mail Me
        </a>
        <a href="https://www.linkedin.com/in/akshatguptaip/" className="connect-btn">
          <Linkedin size={22} /> Linkedin
        </a>
        <a href="https://x.com/_Gupta_Akshat" className="connect-btn">
          <svg className="x-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          X
        </a>
        <a href="https://github.com/AkshatGupta2005" className="connect-btn">
          <Github size={22} /> Github
        </a>
      </div>
    </div>
  );
};

export default ConnectCard;
