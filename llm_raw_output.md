# LLM Output

=== FILE: src/App.jsx ===
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import Leaderboard from './Leaderboard';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

=== END ===

=== FILE: src/main.jsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

=== END ===

=== FILE: src/index.css ===
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-100;
}

.app-container {
  @apply max-w-screen-md mx-auto p-4;
}

.button {
  @apply rounded-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4;
}

 === END ===

=== FILE: src/api.js ===
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const getLeaderboardData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/leaderboard`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const saveScore = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/score`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getGameData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/game`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateGameData = async (data) => {
  try {
    const response = await axios.put(`${BASE_URL}/game`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

=== END ===