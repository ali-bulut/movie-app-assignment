import { Redirect } from 'react-router';

export default [
  {
    path: '/movies',
    public: true,
    exact: true,
    component: () => () => {},
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
