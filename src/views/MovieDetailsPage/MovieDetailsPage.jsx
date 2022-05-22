import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById, IMAGE_PATH_POSTER } from '../../services/movieApi';

// const useFetch = (movieId, method, defaultValue) => {
//   const [state, setState] = useState(defaultValue);

//   useEffect(() => {
//     const getMovieById = async movieId => {
//       console.log(movieId, 'movieId Page');
//       const results = await method(movieId);
//       //   console.log(results);
//       setState(results);
//     };
//     getMovieById(movieId);
//   }, [method, movieId]);

//   return [state, setState];
// };

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([null]);
  console.log(movieId);

  useEffect(() => {
    const getMovieById = async movieId => {
      console.log(movieId, 'movieId Page');
      const results = await fetchMovieById(movieId);
      //   console.log(results);
      setMovie(results);
    };
    getMovieById(movieId);
  }, [movieId]);

  if (!movie) {
    return;
  }
  const { genres, title, vote_average, popularity, overview, poster_path } =
    movie;
  //   console.log(genres);
  //   if (genres) {
  //     const genre = genres.map(genre => genre.name);
  //     return genre;
  //   }
  //   console.log(genre);
  console.log(poster_path);
  const path = IMAGE_PATH_POSTER + poster_path;
  console.log(path);
  return (
    <>
      <h1>MovieDetailsPage: {movieId}</h1>
      {movie && (
        <div>
          <p>{title}</p>
          <p>{overview}</p>
          {/* {genre && genre.map(item => <p>{item}</p>)} */}
          {/* {<p>{...genre}</p>} */}
          <p>{vote_average}</p>
          <p>{popularity}</p>
          <img src={path} alt={title}></img>
        </div>
      )}
      <p>Additional information</p>

      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Review</Link>

      <Outlet />
    </>
  );
};
