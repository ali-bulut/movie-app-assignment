import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import Icons from '../../../constants/Icons';

import 'react-circular-progressbar/dist/styles.css';

interface Props {
  movie: {
    id: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
  };
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const ProgressbarStyles = {
    text: {
      fill: '#fff',
      fontSize: '30px',
      fontWeight: 700,
    },
    trail: {
      stroke: movie.vote_average >= 7 ? '#204529' : movie.vote_average >= 4 ? '#423D0F' : '#571435',
    },
    path: {
      stroke: movie.vote_average >= 7 ? '#21D07A' : movie.vote_average >= 4 ? '#D2D531' : '#DB2360',
    },
    background: {
      fill: '#081C22',
    },
    root: {
      border: '2px solid #081C22',
      borderRadius: 100,
    },
  };

  return (
    <Card className="movie-card">
      <i className="material-icons movie-icon">{Icons.threeDotsHorizantal}</i>
      <Card.Img
        variant="top"
        className="movie-image"
        src={`${process.env.REACT_APP_POSTER_PATH}/${movie.poster_path}`}
      />
      <Card.Body className="movie-body">
        <div className="movie-percantage-progressbar">
          <CircularProgressbarWithChildren
            value={movie.vote_average * 10}
            styles={ProgressbarStyles}
            strokeWidth={6}
            background
          >
            <div className="movie-percantage-text-container">
              <strong>{movie.vote_average * 10}</strong>
              <span className="movie-percantage-text">%</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <Card.Title className="movie-name-container">
          <Link to="/" className="movie-name-text">
            {movie.title}
          </Link>
        </Card.Title>
        <Card.Text>
          <small className="movie-date-text">
            {new Date(movie.release_date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
