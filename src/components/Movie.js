import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// 부모 컴포넌트(여기선 App.js에서 props를 받아옴)
const Movie = ({ coverImg, title, summary, genres, id }) => {
  console.log(id);
  return (
    <div key={id}>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
