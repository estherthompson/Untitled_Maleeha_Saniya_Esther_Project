import './App.css';
import{Routes, Route} from 'react-router-dom'
import Pages from './components/Pages'

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
