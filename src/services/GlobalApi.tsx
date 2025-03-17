export const BASE_URL = "https://api.themoviedb.org/3";
const REACT_APP_API_KEY = "de369382946410f79f178a08d22fd8eb"

export const getTrendingMovies = async () => {
    const response = await fetch(`${BASE_URL}/trending/all/day?api_key=${REACT_APP_API_KEY}`);
    const data = await response.json();
    return data;
};
// https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.des
export const getMovieByGenreId = async (id:any) => {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=${id}`);
    const data = await response.json();
    return data;
};