import { Link } from 'react-router-dom';
import { checkPoster } from '../../utils';
import { List } from './TrendingGallery.styled';

export const TrendingGallery = ({ movies }) => {
  return (
    <List>
      {movies.results.map(({ original_title, id, poster_path }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>
            <img src={checkPoster(poster_path)} alt={movies.title}></img>
            {original_title}
          </Link>
        </li>
      ))}
    </List>
  );
};
