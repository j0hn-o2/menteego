import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar.jsx'; // Adjust the path as necessary
import LandingPage  from './pages/landingpage.jsx';
import Footer from './components/footer.jsx';
import About from './pages/about.jsx';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
