import {
  MOVIES_FETCHING,
  MOVIES_FETCHED,
  MOVIES_FETCH_HAS_ERROR,
  MOVIE_DETAIL_FETCHING,
  MOVIE_DETAIL_FETCHED,
  MOVIE_DETAIL_FETCH_HAS_ERROR,
  MOVIE_CREDITS_FETCHING,
  MOVIE_CREDITS_FETCHED,
  MOVIE_CREDITS_FETCH_HAS_ERROR,
} from '../../types';
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

export const movieDetailFetching = () => ({
  type: MOVIE_DETAIL_FETCHING,
});

export const movieDetailFetched = (data: {}) => ({
  type: MOVIE_DETAIL_FETCHED,
  payload: {
    movieDetailData: data,
  },
});

export const movieDetailFetchHasError = (data: { message: '' }) => ({
  type: MOVIE_DETAIL_FETCH_HAS_ERROR,
  payload: data.message,
});

export const movieCreditsFetching = () => ({
  type: MOVIE_CREDITS_FETCHING,
});

export const movieCreditsFetched = (data: {}) => ({
  type: MOVIE_CREDITS_FETCHED,
  payload: {
    movieCreditsData: data,
  },
});

export const movieCreditsFetchHasError = (data: { message: '' }) => ({
  type: MOVIE_CREDITS_FETCH_HAS_ERROR,
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

export const fetchMovieDetail = (id: number) => (dispatch: any) =>
  new Promise(function (resolve, reject) {
    dispatch(movieDetailFetching());

    api
      .fetchMovieDetail(id)
      .then((data: any) => {
        dispatch(movieDetailFetched(data));
        resolve(data);
      })
      .catch((err) => {
        dispatch(movieDetailFetchHasError(err));
        reject(err);
      });
  });

export const fetchMovieCredits = (id: number) => (dispatch: any) =>
  new Promise(function (resolve, reject) {
    dispatch(movieCreditsFetching());

    api
      .fetchMovieCredits(id)
      .then((data: any) => {
        dispatch(movieCreditsFetched(data));
        resolve(data);
      })
      .catch((err) => {
        dispatch(movieCreditsFetchHasError(err));
        reject(err);
      });
  });
