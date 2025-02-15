import axios from 'axios';

const API_KEY = 'c971c71087646a797f1c36a35fba140a';
const URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
    baseURL: URL,
    params: {
        api_key: API_KEY,
    },
});

export default instance;