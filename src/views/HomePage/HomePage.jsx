import { useFetch } from '../../hooks';
import { fetchTrendingMovies } from '../../services/movieApi';
import { TrendingGallery } from '../../components/TrendingGallery';
import { Loader } from '../../components/Loader/';
import { Title } from './HomePage.styled';

export const HomePage = () => {
  const [movies, loading, error] = useFetch(() => fetchTrendingMovies(), []);

  if (error) return <h1>{error}</h1>;
  if (loading) return <Loader />;

  return (
    <>
      <Title>Trending Movie</Title>
      {movies && <TrendingGallery movies={movies} />}
    </>
  );
};
