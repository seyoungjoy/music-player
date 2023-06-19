import axios from 'axios';

const BASE_API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
});

export default axiosInstance;
