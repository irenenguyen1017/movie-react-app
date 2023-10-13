import { useEffect, useState } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import MovieCard from '../components/MovieCard';
import MovieContainer from '../components/MovieContainer';
import SearchBar from '../components/SearchBar';
import LoadButton from '../components/LoadButton';
import LoadingIndicator from '../components/LoadingIndicator';

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const setCurrentPage = () => setPage((c) => c + 1);

  const fetchMovies = (p) => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    setLoading(true);

    fetch(
      `${process.env.REACT_APP_API_URL}movie/top_rated?include_adult=false&language=en-US&page=${p}&api_key=${process.env.REACT_APP_API_KEY}`,
      options,
    )
      .then((response) => response.json())
      .then((response) => setData((c) => [...c, ...response.results]))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const renderMovie = (movie, index) => {
    return (
      <MovieCard
        key={`movie-card-${index}`}
        id={movie.id}
        title={movie.title}
        description={movie.overview}
        imageName={movie.poster_path}
      />
    );
  };

  return (
    <BaseLayout>
      <SearchBar />
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <MovieContainer>{data.map(renderMovie)}</MovieContainer>
          <LoadButton onClick={setCurrentPage} />
        </>
      )}
    </BaseLayout>
  );
};

export default Home;
