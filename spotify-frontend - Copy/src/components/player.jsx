import React from 'react';

function Player() {
  return (
    <div className="bg-black text-white p-4 fixed bottom-0 w-full flex justify-between items-center">
      <div>Now Playing: Song Name</div>
      <div className="flex gap-4">
        <button>⏮️</button>
        <button>▶️</button>
        <button>⏭️</button>
      </div>
    </div>
  );
}

export default Player;
