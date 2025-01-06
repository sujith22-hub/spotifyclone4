import React from 'react';

function SongCard({ song }) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg">
      <img src={song.cover} alt={song.name} className="rounded mb-2" />
      <h3>{song.name}</h3>
      <p className="text-gray-400">{song.artist}</p>
    </div>
  );
}

export default SongCard;
