const API_KEY = "e15bbb219d7a04f817488309f7efe37f";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActors: `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`,
  // fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  // fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  // fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
