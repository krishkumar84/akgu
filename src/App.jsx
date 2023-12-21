// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import './Components/CSS/Locomotive.css'
import './App.css';
import Contact from './Components/Contact';
import Form from './Components/Form';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home2" element={<Home />} />
        <Route path="/" element={<Home2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
