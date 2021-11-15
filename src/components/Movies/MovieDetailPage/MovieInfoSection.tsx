import React from 'react';
import Texts from '../../../constants/Texts';
import { MovieDetailData } from '../../../hooks/MovieDetail/MovieDetailPageHooks';

interface Props {
  movieDetail: MovieDetailData;
}

const formatToCurrency = (amount: number) => {
  return '$' + amount?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

const MovieInfoSection: React.FC<Props> = ({ movieDetail }) => {
  return (
    <>
      <div>
        <i className="fa fa-facebook-square social-media-icons"></i>
        <i className="fa fa-twitter social-media-icons"></i>
        <i className="fa fa-instagram social-media-icons"></i>
        <div className="vertical-divider"></div>
        <i className="fa fa-link link-icon"></i>
      </div>
      <div>
        <div className="movie-detail-info-content">
          <h5 className="movie-detail-info-header">{Texts.status}</h5>
          <p className="movie-detail-info-text">{movieDetail.status}</p>
        </div>
        <div className="movie-detail-info-content">
          <h5 className="movie-detail-info-header">{Texts.originalLanguage}</h5>
          <p className="movie-detail-info-text">{movieDetail.original_language?.toUpperCase()}</p>
        </div>
        <div className="movie-detail-info-content">
          <h5 className="movie-detail-info-header">{Texts.budget}</h5>
          <p className="movie-detail-info-text">{formatToCurrency(movieDetail.budget)}</p>
        </div>
        <div className="movie-detail-info-content">
          <h5 className="movie-detail-info-header">{Texts.revenue}</h5>
          <p className="movie-detail-info-text">{formatToCurrency(movieDetail.revenue)}</p>
        </div>

        <div className="movie-detail-info-content">
          <h5 className="movie-detail-info-header">{Texts.keywords}</h5>
          <div className="movie-keywords-container">
            {
              // dummy data for keywords
              [
                'martial arts',
                'superhero',
                'based on comic',
                'mixed martial arts',
                'marvel cinematic universe (mcu)',
                'marvel comics',
              ].map((x, idx) => (
                <div key={idx} className="movie-keyword-content">
                  <span>{x}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfoSection;
