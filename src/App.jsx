import { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchTerm, setSearchterm] = useState('');
  const [error, setError] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (query = '') => {
    try {
      setIsLoading(true);
      setError('');

      const endpoint = query.trim()
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query.trim().toLowerCase())}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      if (!data.results || data.results.length === 0) {
        setMovieList([]);
        setError('No movies found');
      } else {
        setMovieList(data.results);
      }
    } catch (error) {
      console.error(`Error fetching the movies: ${error}`);
      setError('Failed to fetch movies. Please try again.');
      setMovieList([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchMovies(searchTerm);
    }, 500);

    return () => clearTimeout(delay);
  }, [searchTerm]);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero Banner" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center mt-6">
            Find <span className="text-gradient">Movies</span> You'll Enjoy&nbsp;
            <span className="whitespace-nowrap">Without Hassle</span>
          </h1>

          <Search searchTerm={searchTerm} setSearchterm={setSearchterm} />
        </header>

        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>

          {isLoading ? (
            <Spinner />
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {movieList.map((movie) => (
                <li key={movie.id}>
                  <MovieCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
