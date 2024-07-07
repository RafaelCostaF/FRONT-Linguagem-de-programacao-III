import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const authenticate = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/signup`, userData);
  return response.data;
};

export const getMyPosts = async (token) => {
  const response = await axios.get(`${API_URL}/posts/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getAllPosts = async (token) => {
  const response = await axios.get(`${API_URL}/posts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createPost = async (post, token) => {
  const response = await axios.post(`${API_URL}/posts`, post, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getAllMessages = async (token) => {
  const response = await axios.get(`${API_URL}/messages`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createMessage = async (message, token) => {
  const response = await axios.post(`${API_URL}/messages`, message, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
