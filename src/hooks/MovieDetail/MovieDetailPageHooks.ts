import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieCredits, fetchMovieDetail } from '../../store/actions/Movies/movies';
import { RootState } from '../../store/reducers';

export interface MovieDetailData {
  backdrop_path: string;
  budget: number;
  genres: [
    {
      name: string;
    },
  ];
  overview: string;
  original_language: string;
  poster_path: string;
  revenue: number;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  release_date: string;
  runtime: number;
}

export interface MovieCreditsData {
  cast: [
    {
      name: string;
      character: string;
      profile_path: string;
    },
  ];
  crew: [
    {
      name: string;
      job: string;
    },
  ];
}

export const useFetchMovieDetail = (id: number) => {
  const dispatch = useDispatch();

  const movieDetailLoading: boolean = useSelector((state: RootState) => state.movies.fetchDetailLoading);
  const movieDetailLoaded: boolean = useSelector((state: RootState) => state.movies.fetchDetailLoaded);
  const movieDetailData: MovieDetailData = useSelector((state: RootState) => state.movies.fetchDetailData);
  const movieDetailError: any = useSelector((state: RootState) => state.movies.fetchDetailError);

  useEffect(() => {
    dispatch(fetchMovieDetail(id));
  }, [id]);

  return {
    movieDetailLoading,
    movieDetailLoaded,
    movieDetailData,
    movieDetailError,
  };
};

export const useFetchMovieCredits = (id: number) => {
  const dispatch = useDispatch();

  const movieCreditsLoading: boolean = useSelector((state: RootState) => state.movies.fetchCreditsLoading);
  const movieCreditsLoaded: boolean = useSelector((state: RootState) => state.movies.fetchCreditsLoaded);
  const movieCreditsData: MovieCreditsData = useSelector((state: RootState) => state.movies.fetchCreditsData);
  const movieCreditsError: any = useSelector((state: RootState) => state.movies.fetchCreditsError);

  useEffect(() => {
    dispatch(fetchMovieCredits(id));
  }, [id]);

  return {
    movieCreditsLoading,
    movieCreditsLoaded,
    movieCreditsData,
    movieCreditsError,
  };
};
