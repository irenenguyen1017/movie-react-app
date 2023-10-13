import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BaseLayout from '../layouts/BaseLayout';
import { getImageUrl } from '../utils';

const Movie = () => {
  const params = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState();

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch(
      `${process.env.REACT_APP_API_URL}movie/${params.movieId}?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`,
      options,
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch(() => navigate('/'));
  }, [navigate, params.movieId]);

  if (!data) {
    return null;
  }

  return (
    <BaseLayout>
      <div class='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div class='md:order-1'>
          <img src={getImageUrl(data.poster_path)} alt='Movie Poster' class='w-full' />
        </div>
        <div class='md:order-2'>
          <h1 class='text-2xl font-semibold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent'>
            {data.title}
          </h1>
          <div class='flex mb-2'>
            <span className='font-semibold mr-2'>Release Date:</span>
            <span className='text-gray-800'>{data.release_date}</span>
          </div>
          <div class='flex mb-2'>
            <span className='font-semibold mr-2'>Genre:</span>
            <span className='text-gray-800'>{data.genres.map((d) => d.name).join(', ')}</span>
          </div>
          <div class='flex mb-2'>
            <span className='font-semibold mr-2'>Languages:</span>
            <span className='text-gray-800'>
              {data.spoken_languages.map((d) => d.name).join(', ')}
            </span>
          </div>
          <div class='inline-flex'>
            <span className='text-gray-800'>{data.overview}</span>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Movie;
