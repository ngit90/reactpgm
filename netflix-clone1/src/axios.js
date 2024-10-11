import axios from 'axios';

// Base URL for TMDb API
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
