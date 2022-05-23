import { Link } from 'react-router-dom';
import { useFetchTrendingMovies } from '../../hooks';
// import { useFetchTrendingMovies } from '../../hooks';

export const HomePage = () => {
  const trendingMovie = useFetchTrendingMovies();

  return (
    <>
      <h1>Trending Movie</h1>
      <ul>
        {trendingMovie &&
          trendingMovie.map(({ original_title, id }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{original_title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
