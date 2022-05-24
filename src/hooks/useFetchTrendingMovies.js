import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/movieApi';

export const useFetchTrendingMovies = () => {
  const [trendingMovie, setTrendingMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchTrendingMovies();
        setTrendingMovie(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  return [trendingMovie, isLoading, error];
};
