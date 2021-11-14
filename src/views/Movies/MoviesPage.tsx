import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import FilterButton from '../../components/Movies/MoviesPage/FilterButton';
import FilterPanel from '../../components/Movies/MoviesPage/FilterPanel';
import MovieType from '../../util/enums/MovieType';
import { useSetHeaderText } from '../../hooks/Movies/MoviesPageHooks';

import '../../styles/Movies/MoviesPage.css';
import Texts from '../../constants/Texts';
import MovieCard from '../../components/Movies/MoviesPage/MovieCard';

interface Params {
  type?: MovieType;
}

const MoviesPage: React.FC = () => {
  const { type } = useParams<Params>();
  let headerText: string = useSetHeaderText(type);

  return (
    <>
      <h4>{headerText}</h4>
      <Row className="movies-panel">
        <Col lg="3">
          <FilterPanel filterName={Texts.sort} />
          <FilterPanel filterName={Texts.filters} />
          <FilterPanel filterName={Texts.whereToWatch} />
          <FilterButton />
        </Col>
        <Col lg="9">
          <Row xs={1} lg={5} md={3} className="g-3">
            {Array.from({ length: 12 }).map((_, idx) => (
              <Col key={idx}>
                <MovieCard />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default MoviesPage;
