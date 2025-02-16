// --- Full Banner.js with Separate H1 and Navbar ---
import React from 'react';
import "./Banner.css";
import beaconLogo from "../assets/Beacon_Logo.png";

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function Banner() {
  return (
    <div className="banner">
      {/* Separate Heading Above Mesh Container */}
      <h1 className="home-tagline">A HOME AWAY FROM HOME</h1>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-item" onClick={() => scrollToSection('home')}>Home</div>
        <div className="nav-item" onClick={() => scrollToSection('about')}>About</div>
        <div className="nav-item" onClick={() => scrollToSection('services')}>Services</div>
        <div className="nav-item" onClick={() => scrollToSection('contact')}>Contact</div>
      </nav>

      {/* Mesh Container with Welcome Bubble */}
      <div className="mesh-container">
        <div className="banner-content">
          <div className="banner-text">Welcome to Beacon</div>
        </div>
      </div>

      {/* Beacon Logo */}
      <img
        src={beaconLogo}
        alt="Beacon Logo"
        className="beacon-logo-static"
      />
    </div>
  );
}

export default Banner;