import PropTypes from "prop-types";

const Movie = ({ coverImg, title, rating, download, desc, genres }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h1>{title}</h1>
      <h4>rate : {rating.toFixed(1)} </h4>
      <h4>downloed : {download} </h4>
      <h4>genres : {genres}</h4>
      <p>{desc}</p>
    </div>
  );
};

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  download: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
