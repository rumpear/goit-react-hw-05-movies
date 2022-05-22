import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../services/movieApi';

export const HomePage = () => {
  const [trendingMovie, setTrendingMovie] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const { results } = await fetchTrendingMovies();
      setTrendingMovie(results);
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <h1>trendingMovie</h1>
      <ul>
        {trendingMovie &&
          trendingMovie.map(({ original_title, id }) => (
            <li key={id}>
              <Link to={`${id}`}>{original_title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};