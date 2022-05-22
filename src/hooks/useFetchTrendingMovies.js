import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/movieApi';

export const useFetchTrendingMovies = () => {
  const [trendingMovie, setTrendingMovie] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const { results } = await fetchTrendingMovies();
      setTrendingMovie(results);
    };
    getTrendingMovies();
  }, []);

  return trendingMovie;
};
