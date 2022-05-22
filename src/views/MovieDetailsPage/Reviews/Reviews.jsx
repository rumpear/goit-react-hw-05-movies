import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchMovieReviews,
  IMAGE_PATH_PROFILE,
} from '../../../services/movieApi';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async movieId => {
      const { results } = await fetchMovieReviews(movieId);
      console.log(results);
      setReviews(results);
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <>
      <h1>Reviews</h1>
      <ul>
        {reviews.length ? (
          reviews.map(
            ({ author, author_details, content, created_at, id, url }) => (
              <li key={id}>
                <img
                  src={author_details.avatar_path}
                  alt={author_details.username}
                />
                {/* <p>Review</p> */}
                <p>{content}</p>
                <p>{created_at}</p>
                <p>{url}</p>
              </li>
            ),
          )
        ) : (
          <h2>Nothing to show</h2>
        )}
      </ul>
    </>
  );
};
