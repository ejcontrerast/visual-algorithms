import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Visualizer from './components/VisualizationCanvas';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bubble-sort" element={<Visualizer />} />
      </Routes>
    </Router>
  );
};

export default App;
