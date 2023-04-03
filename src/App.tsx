import React from 'react';
import Landing from './components/Landing';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sponsors from "./components/sponsors/Sponsors"
import Homepage from './components/homepage/Homepage';
import HackathonMap from './components/homepage/HackathonMap';
import Schedule from './components/homepage/Schedule';
import ProjectsThemes from './components/homepage/ProjectsThemes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/homepage" element={<Homepage animated={true} />} />
        <Route path="/home" element={<Homepage animated={false} />} />
        <Route path="/school-map" element={<HackathonMap />} />
        <Route path="/live-schedule" element={<Schedule display={false} />} />
        <Route path="/live-schedule-screen" element={<Schedule display={true} />} />
        <Route path="/pht" element={<ProjectsThemes />} />
      </Routes>
    </div>
  );
}

export default App;
