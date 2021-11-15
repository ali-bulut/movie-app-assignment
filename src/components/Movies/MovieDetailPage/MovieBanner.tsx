import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MovieCreditsData, MovieDetailData } from '../../../hooks/MovieDetail/MovieDetailPageHooks';
import MovieMainInfo from './MovieMainInfo';

interface Props {
  movieDetail: MovieDetailData;
  movieCredits: MovieCreditsData;
}

const MovieBanner: React.FC<Props> = ({ movieDetail, movieCredits }) => {
  return (
    <div
      className="main-banner"
      style={{
        backgroundImage: movieDetail.backdrop_path
          ? `url(${process.env.REACT_APP_POSTER_PATH}/${movieDetail.backdrop_path})`
          : undefined,
      }}
    >
      <div className="banner-header">
        <Row className="banner-content main-panel-width">
          <Row className="p-0 movie-detail-row">
            <Col lg="3">
              <img
                src={
                  movieDetail.poster_path
                    ? `${process.env.REACT_APP_POSTER_PATH}/${movieDetail.poster_path}`
                    : undefined
                }
                width="300"
                height="450"
                className="movie-img"
              />
            </Col>
            <Col lg="9" className="main-info-container">
              <MovieMainInfo movieDetail={movieDetail} movieCredits={movieCredits} />
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default MovieBanner;
