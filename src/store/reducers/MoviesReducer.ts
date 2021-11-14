import { MOVIES_FETCHING, MOVIES_FETCHED, MOVIES_FETCH_HAS_ERROR } from '../types';

const INITIAL_STATE = {
  fetchAllError: null,
  fetchAllLoading: false,
  fetchAllLoaded: false,
  fetchAllData: {},
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

    default:
      return state;
  }
};

export default reducer;
