import React from 'react';
import SongCard from '../components/songcard';

const songs = [
  { name: 'Song 1', artist: 'Artist 1', cover: 'https://via.placeholder.com/150' },
  { name: 'Song 2', artist: 'Artist 2', cover: 'https://via.placeholder.com/150' },
];

function Home() {
  return (
    <div className="p-4">
      <h2 className="text-white text-2xl mb-4">Top Songs</h2>
      <div className="grid grid-cols-2 gap-4">
        {songs.map((song, idx) => (
          <SongCard key={idx} song={song} />
        ))}
      </div>
    </div>
  );
}

export default Home;
