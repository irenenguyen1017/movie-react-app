import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils';

const MovieCard = ({ id, imageName, title, description }) => {
  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <figure>
        <img src={getImageUrl(imageName)} alt={`Film Poster Coming Soon`} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent'>
          {title}
        </h2>
        <p>{description}</p>
        <div className='card-actions justify-end mt-3'>
          <Link className='btn btn-link' to={`/movie/${id}`}>
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieCard;
