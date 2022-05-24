import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../../services/movieApi';
import { checkProfilePhoto } from '../../../utils';
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
      <List>
        {cast &&
          cast.map(({ id, name, character, profile_path }) => {
            return (
              <Item key={id}>
                <Image src={checkProfilePhoto(profile_path)} alt={name} />
                <p>{name}</p>
                <p>as {character}</p>
              </Item>
            );
          })}
      </List>
    </>
  );
};
