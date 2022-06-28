import Navbar from './pages/Navbar';
import "./assets/styles/styles.css"
import FindACourt from './pages/FindACourt';
import CourtCalendar from './pages/CourtCalendar';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/findacourt" element={<FindACourt />} />
          <Route path="/courtcalendar" element={<CourtCalendar />} />
          <Route path="/about" element={<About />} />
          </Routes>
      </div>
      
    </BrowserRouter>

    
  );
}

export default App
