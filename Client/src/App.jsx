// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashborad from './Component/Dashborad';
import './App.css';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashborad/>} />
      </Routes>
    </Router>
  );
};

export default App;
