const MovieInfoSection = () => {
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
          <h5 className="movie-detail-info-header">Status</h5>
          <p className="movie-detail-info-text">Released</p>
        </div>
        <div className="movie-detail-info-content">
          <h5 className="movie-detail-info-header">Original Language</h5>
          <p className="movie-detail-info-text">English</p>
        </div>
        <div className="movie-detail-info-content">
          <h5 className="movie-detail-info-header">Budget</h5>
          <p className="movie-detail-info-text">$150,000,000.00</p>
        </div>
        <div className="movie-detail-info-content">
          <h5 className="movie-detail-info-header">Revenue</h5>
          <p className="movie-detail-info-text">$430,238,384.00</p>
        </div>

        <div className="movie-detail-info-content">
          <h5 className="movie-detail-info-header">Keywords</h5>
          <div className="movie-keywords-container">
            <div className="movie-keyword-content">
              <span>martial arts</span>
            </div>
            <div className="movie-keyword-content">
              <span>superhero</span>
            </div>
            <div className="movie-keyword-content">
              <span>based on comic</span>
            </div>
            <div className="movie-keyword-content">
              <span>mixed martial arts</span>
            </div>
            <div className="movie-keyword-content">
              <span>marvel cinematic universe (mcu)</span>
            </div>
            <div className="movie-keyword-content">
              <span>marvel comics</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfoSection;
