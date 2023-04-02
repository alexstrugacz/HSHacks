import React from 'react';
import Landing from './components/Landing';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sponsors from "./components/sponsors/Sponsors"
import Homepage from './components/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sponsors" element={<Sponsors />} />
        {/* <Route path="/homepage" element={<Homepage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
