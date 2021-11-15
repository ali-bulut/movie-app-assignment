import React from 'react';
import { Card } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Texts from '../../../constants/Texts';
import { MovieCreditsData } from '../../../hooks/MovieDetail/MovieDetailPageHooks';
import NoImage from '../../../assets/img/no-image.jpeg';

interface Props {
  movieCredits: MovieCreditsData;
}

const MovieCastSection: React.FC<Props> = ({ movieCredits }) => {
  return (
    <>
      <h4>{Texts.topBilledCast}</h4>
      <ul className="movie-cast-list">
        {movieCredits.cast?.slice(0, 10).map((cast, idx) => (
          <li key={idx}>
            <Card className="movie-cast-card">
              <Card.Img
                as={LazyLoadImage}
                variant="top"
                effect="blur"
                className="movie-cast-image"
                src={cast.profile_path ? `${process.env.REACT_APP_POSTER_PATH}/${cast.profile_path}` : NoImage}
              />
              <Card.Body className="movie-cast-card-body">
                <Card.Title className="movie-cast-original-name">{cast.name}</Card.Title>
                <Card.Text className="movie-cast-name">{cast.character}</Card.Text>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>

      <div className="full-cast-crew-container">
        <h5 className="full-cast-crew-text">{Texts.fullCastAndCrew}</h5>
      </div>
    </>
  );
};

export default MovieCastSection;
