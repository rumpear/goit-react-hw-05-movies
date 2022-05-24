import { useEffect, useState } from 'react';
import { fetchSearchMovie } from '../../services/movieApi';
import { Link, useSearchParams } from 'react-router-dom';
import { Loader } from '../Loader';

export const SearchMovieForm = () => {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(input);
    setSearch({ query: input });
  };

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      setLoading(true);
      try {
        const { results } = await fetchSearchMovie(query);
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query]);

  useEffect(() => {
    console.log(search);
    if (!search.get('query')) return;

    const getData = async () => {
      setLoading(true);
      try {
        const { results } = await fetchSearchMovie(search.get('query'));
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [search]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <form action="">
        <input
          name="search"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value.trim())}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>

      {loading ? (
        <Loader />
      ) : (
        <ul>
          {movies &&
            movies.map(({ original_title, id }) => {
              return (
                <Link key={id} to={`${id}`}>
                  <li>{original_title}</li>
                </Link>
              );
            })}
        </ul>
      )}
    </>
  );
};
