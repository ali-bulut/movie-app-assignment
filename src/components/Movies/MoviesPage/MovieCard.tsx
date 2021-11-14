import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import Icons from '../../../constants/Icons';

import 'react-circular-progressbar/dist/styles.css';

const ProgressbarStyles = {
  text: {
    fill: '#fff',
    fontSize: '30px',
    fontWeight: 700,
  },
  trail: {
    stroke: '#204529', // will be changed according to percantage
  },
  path: {
    stroke: '#21D07A', // will be changed according to percantage
  },
  background: {
    fill: '#081C22',
  },
  root: {
    border: '2px solid #081C22',
    borderRadius: 100,
  },
};

const MovieCard = () => {
  return (
    <Card className="movie-card">
      <i className="material-icons movie-icon">{Icons.threeDotsHorizantal}</i>
      <Card.Img
        variant="top"
        className="movie-image"
        src="https://www.themoviedb.org/t/p/w440_and_h660_face/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg"
      />
      <Card.Body className="movie-body">
        <div className="movie-percantage-progressbar">
          <CircularProgressbarWithChildren value={79} styles={ProgressbarStyles} strokeWidth={6} background>
            <div className="movie-percantage-text-container">
              <strong>79</strong>
              <span className="movie-percantage-text">%</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <Card.Title className="movie-name-container">
          <Link to="/" className="movie-name-text">
            Venom: Let There Be Carnage
          </Link>
        </Card.Title>
        <Card.Text>
          <small className="movie-date-text">Sep 30, 2021</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
