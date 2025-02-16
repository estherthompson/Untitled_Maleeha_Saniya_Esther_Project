import React from "react";
import "./Community.css";

function Community() {
  const communityItems = ["Clubs", "Libraries", "Emergency", "Schools"];

  return (
    <div className="community">
      <h2>Community</h2>
      <div className="community-cards">
        {communityItems.map((item, index) => (
          <div key={index} className="card">
            <h3>{item}</h3>
            <button>Discover</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;
