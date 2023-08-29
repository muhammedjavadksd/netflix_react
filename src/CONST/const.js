
const API_KEY = "ec716edca0b43d1e6897ce769f81606c"

const constant = {
    imageUrl: `https://image.tmdb.org/t/p/original`,
    apiBaseUrl: `https://api.themoviedb.org/3/`,
    trending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    action: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    originals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    ComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    HorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    ActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    RomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    Documentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,

}

Object.freeze(constant);

export default constant;