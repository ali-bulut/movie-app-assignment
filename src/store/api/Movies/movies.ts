import Texts from '../../../constants/Texts';
import { apiWrapper } from '../../../helpers/ApiWrapper';
import MovieType from '../../../util/enums/MovieType';

const endpoints = {
  fetchMovies: (listType: MovieType, page: number = 1) =>
    new Promise(async function (resolve, reject) {
      const response = await apiWrapper(`movie/${listType}?page=${page}`, 'GET');

      if (!response) {
        return reject({ message: Texts.somethingWrong });
      } else {
        return resolve(response);
      }
    }),
};

export default endpoints;
