import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import MovieBanner from '../../components/Movies/MovieDetailPage/MovieBanner';
import MovieCastSection from '../../components/Movies/MovieDetailPage/MovieCastSection';
import MovieInfoSection from '../../components/Movies/MovieDetailPage/MovieInfoSection';

import '../../styles/Movies/MovieDetailPage.css';

interface Params {
  id: string;
}

const MovieDetailPage = () => {
  const { id } = useParams<Params>();
  console.log(id);

  return (
    <>
      <MovieBanner />
      <div className="mt-20">
        <Row>
          <Col lg="9">
            <MovieCastSection />
          </Col>
          <Col lg="3">
            <MovieInfoSection />
          </Col>
        </Row>
      </div>
      <div className="mt-100"></div>
    </>
  );
};

export default MovieDetailPage;
