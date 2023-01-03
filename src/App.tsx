import React from 'react';
import Landing from './components/Landing';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
