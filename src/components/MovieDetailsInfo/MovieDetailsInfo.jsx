import { Outlet } from 'react-router-dom';
import { checkPoster } from '../../utils';
import { Link } from './MovieDetailsInfo.styled';

export const MovieDetailsInfo = ({ movie }) => {
  const getGenres = genres => genres.map(genre => genre.name).join(', ');

  return (
    <div>
      <img src={checkPoster(movie.poster_path)} alt={movie.title}></img>
      <p>{movie.title}</p>
      {movie.genres && <p>Genre: {getGenres(movie.genres)}</p>}
      <p>Vote / Votes: {movie.vote_average}</p>
      <p>Popularity: {movie.popularity}</p>
      <p>About: {movie.overview}</p>

      <p>Additional information</p>
      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Review</Link>
      <Outlet />
    </div>
  );
};
