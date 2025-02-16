
/* --- Home.js --- */
import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Community from "./Community";

function Home() {
  return (
    <div className="home-container">
      {/* Animated Mesh Gradient Background */}
      <div className="mesh-background" />
      {/* Full-page Banner */}
      <section className="full-page">
        <Banner />
      </section>

      {/* Community Section */}
      <section className="community-section">
        <Community />
      </section>
    </div>
  );
}

export default Home;

