import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Icons from '../../../constants/Icons';
import Texts from '../../../constants/Texts';
import { MovieCreditsData, MovieDetailData } from '../../../hooks/MovieDetail/MovieDetailPageHooks';

interface Props {
  movieDetail: MovieDetailData;
  movieCredits: MovieCreditsData;
}

const MovieBanner: React.FC<Props> = ({ movieDetail, movieCredits }) => {
  const ProgressbarStyles = {
    text: {
      fill: '#fff',
      fontSize: '30px',
      fontWeight: 700,
    },
    trail: {
      stroke: movieDetail.vote_average >= 7 ? '#204529' : movieDetail.vote_average >= 4 ? '#423D0F' : '#571435',
    },
    path: {
      stroke: movieDetail.vote_average >= 7 ? '#21D07A' : movieDetail.vote_average >= 4 ? '#D2D531' : '#DB2360',
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
          <Row className="p-0">
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
              <h3 className="movie-name">{movieDetail.title}</h3>
              <span className="movie-year"> ({new Date(movieDetail.release_date).getFullYear()})</span>
              <br />
              <span className="movie-cert">PG-13</span>
              <span className="movie-info-text">
                {new Date(movieDetail.release_date).toLocaleDateString('en-US')} (US) •
              </span>
              <span className="movie-info-text">{movieDetail.genres?.map((x) => x.name).join(', ')} •</span>
              <span className="movie-info-text">
                {(movieDetail.runtime / 60).toFixed(0)}h {movieDetail.runtime % 60}m
              </span>
              <br />
              <div className="movie-progressbar">
                <CircularProgressbarWithChildren
                  value={movieDetail.vote_average ? movieDetail.vote_average * 10 : 0}
                  styles={ProgressbarStyles}
                  strokeWidth={6}
                  background
                >
                  <div className="movie-progressbar-text-container">
                    <strong>{movieDetail.vote_average ? movieDetail.vote_average * 10 : 0}</strong>
                    <span className="movie-progressbar-text">%</span>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <div className="movie-score-container">
                <p className="movie-score-text">{Texts.userScore}</p>
              </div>
              <div className="movie-icons-container">
                <i className="material-icons">{Icons.list}</i>
              </div>
              <div className="movie-icons-container">
                <i className="material-icons">{Icons.favorite}</i>
              </div>
              <div className="movie-icons-container">
                <i className="material-icons">{Icons.bookmark}</i>
              </div>
              <div className="movie-icons-container">
                <i className="material-icons">{Icons.star}</i>
              </div>
              <div className="movie-trailer-container">
                <i className="material-icons">{Icons.playArrow}</i>
                <span className="movie-trailer-text">{Texts.playTrailer}</span>
              </div>

              <div className="movie-quote-container">
                <p className="movie-quote-text">{movieDetail.tagline}</p>
              </div>

              <div className="movie-overview-container">
                <h4>{Texts.overview}</h4>
                <p className="movie-overview-text">{movieDetail.overview}</p>
              </div>

              <Row>
                {movieCredits?.crew?.slice(0, 5).map((x, idx) => (
                  <Col key={idx} lg="4" className="movie-crew-content">
                    <p className="movie-crew-name">{x.name}</p>
                    <p className="movie-crew-role">{x.job}</p>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default MovieBanner;
