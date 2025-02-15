import axios from '@/api/axiosInstance';

export async function fetchMovies(page = 1) {
    try {
        const response = await axios.get('/discover/movie', {
            params: {language: 'en-US', page},
        });
        return response.data.results;
    } catch (error) {
        console.error('Error when downloading movies:', error);
        return [];
    }
}

export async function fetchMovieDetails(id) {
    try {
        const response = await axios.get(`/movie/${id}`, {
            params: {language: 'en-US'},
        });
        return response.data;
    } catch (error) {
        console.error('Error when downloading movies:', error);
        return null;
    }
}
