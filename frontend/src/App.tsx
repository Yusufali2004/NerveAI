import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("Connecting to server...");

  useEffect(() => {
    // Fetching the status from our Node.js server
    axios.get('http://localhost:5000/api/status')
      .then(res => setMessage(res.data.message))
      .catch(() => setMessage("Backend is not running ❌"));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-4">NerveAI</h1>
      <div className="p-6 bg-slate-800 rounded-xl shadow-lg border border-slate-700">
        <p className="text-xl font-mono text-green-400">{message}</p>
      </div>
      <p className="mt-4 text-slate-400">GSSoC 2026 • Open Source Project</p>
    </div>
  );
};

export default App;