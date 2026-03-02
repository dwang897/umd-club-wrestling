import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer">
  <div className="footer-line"></div>
  <div className="footer-container">
    <div className="footer-left">
      <img src="/images/umd-logo.png" alt="Maryland Wrestling" className="footer-logo" />
      <div className="footer-credits">
        <p>&copy; 2026 Maryland Club Wrestling</p>
        <p className="footer-disclaimer">
          This content is not endorsed, approved, sponsored, or provided by or on behalf of the University of Maryland or its affiliates.
        </p>
      </div>
    </div>
    
    <div className="footer-right">
          <ul className="footer-links">
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="https://github.com/dwang897" target="_blank" rel="noreferrer">Dev</a></li>
          </ul>
        </div>
  </div>
</footer>
  );
};

export default Footer;