import axios from 'axios';

const baseURL =
  process.env.VITE_ENVIRONMENT === 'development'
    ? process.env.VITE_API_DEVELOPMENT_URL
    : process.env.VITE_API_PROD_URL;

const headers = {
  'Content-Type': 'application/json'
};

export const axiosInstance = axios.create({
  baseURL,
  headers,
  withCredentials: true
});
