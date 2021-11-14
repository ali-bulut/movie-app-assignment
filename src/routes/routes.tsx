import { Redirect } from 'react-router';
import MoviesPage from '../views/Movies/MoviesPage';

export default [
  {
    path: '/movies/:type?',
    public: true,
    exact: true,
    component: () => <MoviesPage />,
  },
  {
    path: '/movies/:id',
    public: true,
    exact: true,
    component: () => () => {},
  },
  {
    path: '/',
    public: true,
    exact: true,
    // temporary solving. Maybe homepage could be added later.
    component: () => <Redirect to="/movies" />,
  },
  {
    path: '*',
    public: true,
    component: false,
  },
];
