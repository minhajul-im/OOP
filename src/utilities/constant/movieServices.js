const key = import.meta.env.VITE_TM_DB_KEY;
const base_url = "https://api.themoviedb.org/3/movie/";

const TMDB_API = {
  popular: `${base_url}popular?api_key=${key}`,
  topRelated: `${base_url}upcoming?api_key=${key}`,
  topRelated: `${base_url}top_rated?api_key=${key}`,
  nowPlaying: `${base_url}now_playing?api_key=${key}`,
};

export const TRAILER = (id) => {
  return `${base_url}${id}/videos?api_key=${key}`;
};

export default TMDB_API;
