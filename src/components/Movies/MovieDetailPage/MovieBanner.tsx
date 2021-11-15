import { Col, Row } from 'react-bootstrap';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

const MovieBanner = () => {
  const ProgressbarStyles = {
    text: {
      fill: '#fff',
      fontSize: '30px',
      fontWeight: 700,
    },
    trail: {
      stroke: '#204529',
    },
    path: {
      stroke: '#21D07A',
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
        backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/cinER0ESG0eJ49kXlExM0MEWGxW.jpg")`,
      }}
    >
      <div className="banner-header">
        <Row className="banner-content main-panel-width">
          <Row className="p-0">
            <Col lg="3">
              <img
                src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"
                width="300"
                height="450"
                className="movie-img"
              />
            </Col>
            <Col lg="9" className="main-info-container">
              <h3 className="movie-name">Shang-Chi and the Legend of the Ten Rings</h3>
              <span className="movie-year"> (2021)</span>
              <br />
              <span className="movie-cert">PG-13</span>
              <span className="movie-info-text">09/03/2021 (TR) •</span>
              <span className="movie-info-text">Action, Adventure, Fantasy •</span>
              <span className="movie-info-text">2h 12m</span>
              <br />
              <div className="movie-progressbar">
                <CircularProgressbarWithChildren value={79} styles={ProgressbarStyles} strokeWidth={6} background>
                  <div className="movie-progressbar-text-container">
                    <strong>{79}</strong>
                    <span className="movie-progressbar-text">%</span>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <div className="movie-score-container">
                <p className="movie-score-text">User Score</p>
              </div>
              <div className="movie-icons-container">
                <i className="material-icons">format_list_bulleted</i>
              </div>
              <div className="movie-icons-container">
                <i className="material-icons">favorite</i>
              </div>
              <div className="movie-icons-container">
                <i className="material-icons">bookmark</i>
              </div>
              <div className="movie-icons-container">
                <i className="material-icons">star</i>
              </div>
              <div className="movie-trailer-container">
                <i className="material-icons">play_arrow</i>
                <span className="movie-trailer-text">Play Trailer</span>
              </div>

              <div className="movie-quote-container">
                <p className="movie-quote-text">You cant outrun your destiny.</p>
              </div>

              <div className="movie-overview-container">
                <h4>Overview</h4>
                <p className="movie-overview-text">
                  Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the
                  mysterious Ten Rings organization.
                </p>
              </div>

              <Row>
                <Col lg="4" className="movie-crew-content">
                  <p className="movie-crew-name">Destin Daniel Cretton</p>
                  <p className="movie-crew-role">Director, Screenplay</p>
                </Col>
                <Col lg="4" className="movie-crew-content">
                  <p className="movie-crew-name">Jim Starlin</p>
                  <p className="movie-crew-role">Characters</p>
                </Col>
                <Col lg="4" className="movie-crew-content">
                  <p className="movie-crew-name">Steve Englehart</p>
                  <p className="movie-crew-role">Characters</p>
                </Col>
                <Col lg="4" className="movie-crew-content">
                  <p className="movie-crew-name">Dave Callaham</p>
                  <p className="movie-crew-role">Screenplay</p>
                </Col>
                <Col lg="4" className="movie-crew-content">
                  <p className="movie-crew-name">Andrew Lanham</p>
                  <p className="movie-crew-role">Screenplay</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default MovieBanner;
