import React from "react";
import "./Home.css";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Community from "./Community";

function Home() {
  return (
    <div className="Home-container">
      <NavBar />
      <Banner />
      <Community />
    </div>
  );
}

export default Home;
