import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import FilterButton from '../../components/Movies/MoviesPage/FilterButton';
import FilterPanel from '../../components/Movies/MoviesPage/FilterPanel';
import MovieType from '../../util/enums/MovieType';
import { useSetHeaderText } from '../../hooks/Movies/MoviesPageHooks';

import '../../styles/Movies/MoviesPage.css';
import Texts from '../../constants/Texts';

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
        <Col lg="9"></Col>
      </Row>
    </>
  );
};

export default MoviesPage;
