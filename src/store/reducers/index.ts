import { combineReducers } from 'redux';
import MoviesReducer from './MoviesReducer';

const rootReducer = combineReducers({
  movies: MoviesReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
