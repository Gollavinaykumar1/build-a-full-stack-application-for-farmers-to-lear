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

// Auto-patched missing exports by VIA startup fix
export const createItem = async (data) => {
  const r = await fetch(`${BASE_URL}/api/v1/item`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!r.ok) throw new Error('createItem failed');
  return r.json();
};
export const deleteItem = async (id) => {
  const r = await fetch(`${BASE_URL}/api/v1/item/${id}`, {
    method: 'DELETE',
  });
  if (!r.ok) throw new Error('deleteItem failed');
  return r.json();
};
export const getItems = async () => {
  const r = await fetch(`${BASE_URL}/api/v1/items`);
  if (!r.ok) throw new Error('getItems failed');
  return r.json();
};
export const getStats = async () => {
  const r = await fetch(`${BASE_URL}/api/v1/stats`);
  if (!r.ok) throw new Error('getStats failed');
  return r.json();
};
