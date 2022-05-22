import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchCast } from '../../../services/movieApi';
import { Image, List, Item } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getCast = async movieId => {
      const { cast } = await fetchCast(movieId);
      console.log(cast);
      setCast(cast);
    };
    getCast(movieId);
  }, [movieId]);

  return (
    <>
      <h1>Cast</h1>
      <List>
        {cast &&
          cast.map(({ id, name, character, profile_path }) => (
            <Item key={id}>
              <Image
                src={`https://image.tmdb.org/t/p/original/` + profile_path}
                alt={name}
              />
              <p>
                {name} as {character}
              </p>
            </Item>
          ))}
      </List>
    </>
  );
};
