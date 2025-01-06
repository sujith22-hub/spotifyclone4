import React from 'react';

function PlaylistCard({ playlist }) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg">
      <img src={playlist.cover} alt={playlist.name} className="rounded mb-2" />
      <h3>{playlist.name}</h3>
      <p className="text-gray-400">{playlist.description}</p>
    </div>
  );
}

export default PlaylistCard;
