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
} from '../types';

const INITIAL_STATE = {
  fetchAllError: null,
  fetchAllLoading: false,
  fetchAllLoaded: false,
  fetchAllData: {},

  fetchDetailError: null,
  fetchDetailLoading: false,
  fetchDetailLoaded: false,
  fetchDetailData: {},

  fetchCreditsError: null,
  fetchCreditsLoading: false,
  fetchCreditsLoaded: false,
  fetchCreditsData: {},
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case MOVIES_FETCHING: {
      return {
        ...state,
        fetchAllLoading: true,
        fetchAllLoaded: false,
        fetchAllError: null,
      };
    }
    case MOVIES_FETCHED: {
      return {
        ...state,
        fetchAllLoading: false,
        fetchAllLoaded: true,
        fetchAllError: null,
        fetchAllData: action.payload.moviesData,
      };
    }
    case MOVIES_FETCH_HAS_ERROR: {
      return {
        ...state,
        fetchAllLoading: false,
        fetchAllLoaded: false,
        fetchAllError: action.payload,
      };
    }

    case MOVIE_DETAIL_FETCHING: {
      return {
        ...state,
        fetchDetailLoading: true,
        fetchDetailLoaded: false,
        fetchDetailError: null,
      };
    }
    case MOVIE_DETAIL_FETCHED: {
      return {
        ...state,
        fetchDetailLoading: false,
        fetchDetailLoaded: true,
        fetchDetailError: null,
        fetchDetailData: action.payload.movieDetailData,
      };
    }
    case MOVIE_DETAIL_FETCH_HAS_ERROR: {
      return {
        ...state,
        fetchDetailLoading: false,
        fetchDetailLoaded: false,
        fetchDetailError: action.payload,
      };
    }

    case MOVIE_CREDITS_FETCHING: {
      return {
        ...state,
        fetchCreditsLoading: true,
        fetchCreditsLoaded: false,
        fetchCreditsError: null,
      };
    }
    case MOVIE_CREDITS_FETCHED: {
      return {
        ...state,
        fetchCreditsLoading: false,
        fetchCreditsLoaded: true,
        fetchCreditsError: null,
        fetchCreditsData: action.payload.movieCreditsData,
      };
    }
    case MOVIE_CREDITS_FETCH_HAS_ERROR: {
      return {
        ...state,
        fetchCreditsLoading: false,
        fetchCreditsLoaded: false,
        fetchCreditsError: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
