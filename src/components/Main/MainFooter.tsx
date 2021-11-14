import { Col, Row } from 'react-bootstrap';
import FooterImg from '../../assets/img/footer-img.svg';

const MainFooter = () => {
  return (
    <footer className="pt-4 pb-4">
      <div className="main-panel main-panel-width">
        <Row>
          <Col lg="3"></Col>
          <Col lg="9">
            <Row lg={5} md={1} xs={1} className="g-3">
              <Col>
                <img src={FooterImg} width="130" height="94" />
                <div className="join">
                  <a className="join-link">Join The Community</a>
                </div>
              </Col>
              <Col>
                <div style={{ marginTop: 30 }}>
                  <h3>The Basics</h3>
                  <ul>
                    <li>
                      <a href="#">About TMDB</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Support Forums</a>
                    </li>
                    <li>
                      <a href="#">API</a>
                    </li>
                    <li>
                      <a>System Status</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div style={{ marginTop: 30 }}>
                  <h3>Get Involved</h3>
                  <ul>
                    <li>
                      <a href="#">Contribution Bible</a>
                    </li>
                    <li>
                      <a href="#">3rd Party Applications</a>
                    </li>
                    <li>
                      <a href="#">Add New Movie</a>
                    </li>
                    <li>
                      <a href="#">Add New TV Show</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div style={{ marginTop: 30 }}>
                  <h3>Community</h3>
                  <ul>
                    <li>
                      <a href="#">Guidelines</a>
                    </li>
                    <li>
                      <a href="#">Discussions</a>
                    </li>
                    <li>
                      <a href="#">Leaderboard</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div style={{ marginTop: 30 }}>
                  <h3>Legal</h3>
                  <ul>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                    <li>
                      <a href="#">API Terms of Use</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default MainFooter;
