import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' }); // Backend URL

export const fetchSongs = () => API.get('/songs');
export const fetchPlaylists = () => API.get('/playlists');
