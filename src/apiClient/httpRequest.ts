import axios from 'axios';
const BASE_API_URL = 'http://localhost:8000';

const httpRequest = axios.create({
  baseURL: BASE_API_URL,
});

export default httpRequest;
