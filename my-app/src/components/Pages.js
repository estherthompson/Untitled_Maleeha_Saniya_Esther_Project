import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CardContainer from './CardContainer';
import Community from './Community';


function Pages() {
  return (
    <CardContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CardContainer" element={<CardContainer/>} />
        <Route path="/Community" element={<Community/>} />

      </Routes>
    </CardContainer>

  );
}

export default Pages;