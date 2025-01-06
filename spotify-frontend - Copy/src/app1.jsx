import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Player from './components/player';
import Home from './pages/home';
import Login from './pages/login';
import Playlist from './pages/playlist';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="w-4/5">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/playlist/:id" element={<Playlist />} />
          </Routes>
        </div>
      </div>
      <Player />
    </Router>
  );
}

export default App;
import Playlist from './pages/playlist';
import NotFound from './pages/notfound';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/playlist/:id" element={<Playlist />} />
  <Route path="*" element={<NotFound />} /> {/* This catches all invalid routes */}
</Routes>
