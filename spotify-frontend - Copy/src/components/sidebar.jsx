import React from 'react';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white h-screen p-4 w-1/5">
      <ul>
        <li className="mb-4">Home</li>
        <li className="mb-4">Search</li>
        <li className="mb-4">Your Library</li>
      </ul>
    </div>
  );
}

export default Sidebar;
