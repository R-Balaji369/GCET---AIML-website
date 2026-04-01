import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Faculty from './pages/Faculty';
import Programs from './pages/Programs';
import Laboratories from './pages/Laboratories';
import Contact from './pages/Contact';
import Research from './pages/Research';
import Achievements from './pages/Achievements';
import Announcements from './pages/Announcements';
import Gallery from './pages/Gallery';
import About from './pages/About';
import VisionMission from './pages/VisionMission';
import TeachingLearning from './pages/TeachingLearning';
import Library from './pages/Library';
import Publications from './pages/Publications';
import Placements from './pages/Placements';
import Alumni from './pages/Alumni';
import Downloads from './pages/Downloads';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vision-mission" element={<VisionMission />} />
          <Route path="teaching-learning" element={<TeachingLearning />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="programs" element={<Programs />} />
          <Route path="laboratories" element={<Laboratories />} />
          <Route path="library" element={<Library />} />
          <Route path="research" element={<Research />} />
          <Route path="publications" element={<Publications />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="placements" element={<Placements />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
