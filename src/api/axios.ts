import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-api-url.com',
});

export default instance;
