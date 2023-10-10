import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const MovieCard = ({id, imageName, title, description}) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={`${process.env.REACT_APP_MOVIE_IMG_HOST_URL}${imageName}`} alt={`${imageName}`} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <Link className="btn btn-primary" to={`/movie/${id}`}>Movie details</Link>
                </div>
            </div>
        </div>
    )
};

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    imageName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default MovieCard;