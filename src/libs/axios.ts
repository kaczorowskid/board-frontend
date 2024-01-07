import axios from 'axios';
import { runtimeConfig } from 'utils';

const baseURL =
  runtimeConfig.environment === 'development'
    ? runtimeConfig.apiDevelopmentUrl
    : runtimeConfig.apiProdUrl;

const headers = {
  'Content-Type': 'application/json'
};

export const axiosInstance = axios.create({
  baseURL,
  headers,
  withCredentials: true
});
