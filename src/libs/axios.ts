import axios from 'axios';

const baseURL = 'http://localhost:4200';

const headers = {
  'Content-Type': 'application/json'
};

export const axiosInstance = axios.create({ baseURL, headers });
