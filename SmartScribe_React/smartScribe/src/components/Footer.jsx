import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer({ toggleTheme, theme }) {
  return (
    <footer className="footer">
      <div className="footer-left-container">
        <div className="toggle-container">
          <input
            type="checkbox"
            id="theme-radio-btn"
            className="radiobtn"
            checked={theme === 'dark'}   // checkbox checked when theme is dark
            onChange={toggleTheme}        // toggle theme on change
          />
          <label htmlFor="theme-radio-btn" className="label-theme">
            Dark Theme
          </label>
        </div>
      </div>

      <div className="footer-right-container">
        <div className="footer-text-container">
          <Link to="#" className="footer-text-container" aria-label="Powered by NYANZVI">
            powered by NYANZVI
          </Link>
        </div>

        <div className="footer-text-container">
          <Link to="#" className="footer-text-container" aria-label="version 1.0.0">
            version 1.0.0
          </Link>
        </div>
      </div>
    </footer>
  );
}
