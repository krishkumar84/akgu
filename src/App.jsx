// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import './Components/CSS/Locomotive.css'
import './App.css';
import Contact from './Components/Contact';
import Form from './Components/Form';
import Home3 from './pages/Home3';
import Achiev from './Components/Achiev';
import Society from './Components/Society';
import Labs from './Components/Labs';
import Faculty from './Components/Faculty';
import Department from './Components/Department';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home2" element={<Home />} />
        <Route path="/" element={<Home2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/achiev" element={<Achiev />} />
        <Route path="/society" element={<Society />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/Department" element={<Department />} />
      </Routes>
    </Router>
  );
}

export default App;
