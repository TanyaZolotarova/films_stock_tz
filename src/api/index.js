import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTcxYzcxMDg3NjQ2YTc5N2YxYzM2YTM1ZmJhMTQwYSIsIm5iZiI6MTczOTIwMjgyNy41NTMsInN1YiI6IjY3YWEyMTBiOGI3MThiNjZjNTBmODU3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J7NBcjOZ8V8S30D0XJ2VAJXkLqYzhS7pkCsbpZ9mRCI';
const URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
    URL: URL,
    params: {
        api_key: API_KEY,
    },
});

export default instance;