import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Visualizer from './components/VisualizationCanvas';
import Sidebar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
      <Sidebar>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/visualizer" element={<Visualizer />} />
          </Routes>
        </Router>
      </Sidebar>
    </>
  );
};

export default App;
