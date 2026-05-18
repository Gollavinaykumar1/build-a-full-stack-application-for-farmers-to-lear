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