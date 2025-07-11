import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Checkout  from './components/Checkout';


import Success from './components/Success';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
