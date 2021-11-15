import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Texts from '../../constants/Texts';
import { fetchMovies } from '../../store/actions/Movies/movies';
import { RootState } from '../../store/reducers';
import MovieType from '../../util/enums/MovieType';

interface MoviesData {
  pages: number;
  results: [];
  total_pages: number;
  total_results: number;
}

export const useSetHeaderText = (type: MovieType): string => {
  const setHeaderText = (type: MovieType): string => {
    let headerText: string = '';
    switch (type) {
      case MovieType.upcoming:
        headerText = Texts.upcomingMovies;
        break;
      case MovieType.topRated:
        headerText = Texts.topRatedMovies;
        break;
      default:
        headerText = Texts.popularMovies;
        break;
    }

    return headerText;
  };

  return setHeaderText(type);
};

export const useFetchMovies = (listType: MovieType, page: number) => {
  const dispatch = useDispatch();

  const moviesLoading: boolean = useSelector((state: RootState) => state.movies.fetchAllLoading);
  const moviesLoaded: boolean = useSelector((state: RootState) => state.movies.fetchAllLoaded);
  const moviesData: MoviesData = useSelector((state: RootState) => state.movies.fetchAllData);
  const moviesError: any = useSelector((state: RootState) => state.movies.fetchAllError);

  useEffect(() => {
    dispatch(fetchMovies(listType, page));
  }, [listType]);

  return {
    moviesLoading,
    moviesLoaded,
    moviesData,
    moviesError,
  };
};
