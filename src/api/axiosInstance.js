import axios from 'axios';

const API_KEY = import.meta.env.VITE_SECRET_API_KEY;
const URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
    baseURL: URL,
    params: {
        api_key: API_KEY,
    },
});

export default instance;