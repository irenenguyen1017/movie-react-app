import { useEffect, useState, useCallback } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import MovieContainer from '../components/MovieContainer';
import LoadingIndicator from '../components/LoadingIndicator';

const Search = () => {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const searchQuery = searchParams.get('query');

  const searchMovies = useCallback(query => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };

    setLoading(true)

    fetch(
      `${process.env.REACT_APP_API_URL}search/movie?include_adult=false&language=en-US&page=1&query=${query}&api_key=${process.env.REACT_APP_API_KEY}`,
      options,
    )
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch(() => navigate('/')).finally(() => setLoading(false));
  }, [navigate])

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

  const renderContent = () => {
    if (loading) {
      return <LoadingIndicator />
    }

    if (searchQuery && data.length === 0) {
      return (
        <div className='flex justify-center'>
          <h1 className='font-sans font-light text-3xl text-dark-500 max-w-[500px] text-center mt-20'>
            We're sorry, but it seems we couldn't find any movies that match your search criteria.
          </h1>
        </div>
      )
    }

    return (
      <MovieContainer>{data.map(renderMovie)}</MovieContainer>
    )
  }

  useEffect(() => {
    searchMovies(searchQuery)
  }, [searchMovies, searchQuery]);

  return (
    <BaseLayout>
      <SearchBar />
      {renderContent()}
    </BaseLayout>
  );
};

export default Search;
