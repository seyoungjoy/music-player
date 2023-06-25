import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

export default axiosInstance;
