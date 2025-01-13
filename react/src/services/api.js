import axios from 'axios';
import config from '../config';

const api = axios.create({
    baseURL: config.baseUrl,
});

export default api;
