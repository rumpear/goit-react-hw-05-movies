import { Outlet, useParams } from 'react-router-dom';
import { GoBackButton } from '../../components/GoBackButton';
import { Loader } from '../../components/Loader';
import { MovieDetailsInfo } from '../../components/MovieDetailsInfo';
import { useFetch } from '../../hooks';
import { fetchMovieById } from '../../services/movieApi';
import { checkPoster } from '../../utils';
import { Link } from './MovieDetailsPage.styled';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, loading, error] = useFetch(
    () => fetchMovieById(movieId),
    [movieId],
  );

  // const getGenres = genres => genres.map(genre => genre.name).join(', ');

  if (error) return <h1>{error}</h1>;
  if (loading) return <Loader />;

  return (
    <>
      <GoBackButton />
      {movie && <MovieDetailsInfo movie={movie} />}
      {/* {movie && (
        <div>
          <img src={checkPoster(movie.poster_path)} alt={movie.title}></img>
          <p>{movie.title}</p>
          {movie.genres && <p>Genre: {getGenres(movie.genres)}</p>}
          <p>Vote / Votes: {movie.vote_average}</p>
          <p>Popularity: {movie.popularity}</p>
          <p>About: {movie.overview}</p>
        </div>
      )} */}

      {/* <p>Additional information</p>
      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Review</Link>
      <Outlet /> */}
    </>
  );
};
