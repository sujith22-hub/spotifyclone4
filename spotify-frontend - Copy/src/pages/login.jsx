import React from 'react';

function Login() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/login'; // Backend OAuth URL
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <button onClick={handleLogin} className="bg-green-500 px-4 py-2 rounded">
        Login with Spotify
      </button>
    </div>
  );
}

export default Login;
