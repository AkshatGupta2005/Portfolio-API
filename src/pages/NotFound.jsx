import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import NavCard from '../components/NavCard';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="page-container">
      <NavCard />
      <div className="card detail-not-found" style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '72px', fontWeight: '700', marginBottom: '8px' }}>404</h1>
        <p className="page-subtitle" style={{ marginBottom: '16px' }}>Oops! Page not found</p>
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          Return to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
