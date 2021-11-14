import { MOVIES_FETCHING, MOVIES_FETCHED, MOVIES_FETCH_HAS_ERROR } from '../../types';
import api from '../../api/Movies/movies';
import MovieType from '../../../util/enums/MovieType';

export const moviesFetching = () => ({
  type: MOVIES_FETCHING,
});

export const moviesFetched = (data: {}) => ({
  type: MOVIES_FETCHED,
  payload: {
    moviesData: data,
  },
});

export const moviesFetchHasError = (data: { message: '' }) => ({
  type: MOVIES_FETCH_HAS_ERROR,
  payload: data.message,
});

export const fetchMovies = (listType: MovieType, page: number) => (dispatch: any) =>
  new Promise(function (resolve, reject) {
    dispatch(moviesFetching());

    api
      .fetchMovies(listType, page)
      .then((data: any) => {
        dispatch(moviesFetched(data));
        resolve(data);
      })
      .catch((err) => {
        dispatch(moviesFetchHasError(err));
        reject(err);
      });
  });
