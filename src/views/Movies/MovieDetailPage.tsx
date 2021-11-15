import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import CustomSpinner from '../../components/Common/CustomSpinner';
import MovieBanner from '../../components/Movies/MovieDetailPage/MovieBanner';
import MovieCastSection from '../../components/Movies/MovieDetailPage/MovieCastSection';
import MovieInfoSection from '../../components/Movies/MovieDetailPage/MovieInfoSection';
import { useFetchMovieCredits, useFetchMovieDetail } from '../../hooks/MovieDetail/MovieDetailPageHooks';

import '../../styles/Movies/MovieDetailPage.css';

interface Params {
  id: string;
}

const MovieDetailPage = () => {
  const { id } = useParams<Params>();

  const { movieDetailLoading, movieDetailLoaded, movieDetailData, movieDetailError } = useFetchMovieDetail(
    parseInt(id),
  );

  const { movieCreditsLoading, movieCreditsLoaded, movieCreditsData, movieCreditsError } = useFetchMovieCredits(
    parseInt(id),
  );

  if (movieDetailError) alert(movieDetailError);
  if (movieCreditsError) alert(movieCreditsError);

  if ((movieDetailLoading && !movieDetailLoaded) || (movieCreditsLoading && !movieCreditsLoaded)) {
    return <CustomSpinner />;
  }

  return (
    <>
      <MovieBanner movieDetail={movieDetailData} movieCredits={movieCreditsData} />
      <div className="mt-20">
        <Row>
          <Col lg="9">
            <MovieCastSection movieCredits={movieCreditsData} />
          </Col>
          <Col lg="3">
            <MovieInfoSection movieDetail={movieDetailData} />
          </Col>
        </Row>
      </div>
      <div className="mt-100"></div>
    </>
  );
};

export default MovieDetailPage;
