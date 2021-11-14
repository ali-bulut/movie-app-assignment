import Texts from '../../constants/Texts';
import MovieType from '../../util/enums/MovieType';

export const useSetHeaderText = (type: MovieType | undefined): string => {
  const setHeaderText = (type: MovieType | undefined): string => {
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
