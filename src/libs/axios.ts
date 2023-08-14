import { userToken } from 'constants/token';
import axios from 'axios';

const baseURL = 'http://localhost:4200';

const headers = {
  'Content-Type': 'application/json',
  'user-token': localStorage.getItem(userToken)
};

export const axiosInstance = axios.create({ baseURL, headers });
