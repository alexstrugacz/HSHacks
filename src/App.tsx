import React from 'react';
import Landing from './components/Landing';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sponsors from "./components/sponsors/Sponsors"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
    </div>
  );
}

export default App;
