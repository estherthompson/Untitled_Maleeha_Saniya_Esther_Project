import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Community from "./Community";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Community" element={<Community />} />
    </Routes>
  );
}

export default Pages;
