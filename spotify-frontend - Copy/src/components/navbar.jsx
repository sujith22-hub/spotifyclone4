import React from 'react';

function Navbar() {
  return (
    <div className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Spotify Clone</h1>
      <button className="bg-green-500 px-4 py-2 rounded">Login</button>
    </div>
  );
}

export default Navbar;
