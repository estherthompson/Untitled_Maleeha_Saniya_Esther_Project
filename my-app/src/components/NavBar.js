import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Beacon</h2>
        <p>A Home Away from Home</p>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Community">Community</Link>
      </div>
      <div className="auth-buttons">
        <button className="signup">Sign Up</button>
        <button className="login">Login</button>
      </div>
    </nav>
  );
}

export default NavBar;
