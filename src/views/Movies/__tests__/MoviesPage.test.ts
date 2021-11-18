import { renderHook } from '@testing-library/react-hooks';

import Texts from '../../../constants/Texts';
import { useSetHeaderText } from '../../../hooks/Movies/MoviesPageHooks';
import MovieType from '../../../util/enums/MovieType';

describe('useSetHeaderText Custom Hook', () => {
  it('Should provide a default text', () => {
    const { result } = renderHook(useSetHeaderText);
    expect(result.current).toEqual(Texts.popularMovies);
  });

  it('Should provide a text for given enum value', () => {
    const { result } = renderHook(() => useSetHeaderText(MovieType.topRated));
    expect(result.current).toEqual(Texts.topRatedMovies);
  });

  it('Should not be equal to a text that is assigned to another enum value', () => {
    const { result } = renderHook(() => useSetHeaderText(MovieType.topRated));
    expect(result.current).not.toEqual(Texts.popularMovies);
  });
});
