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
    path: '*',
    public: true,
    component: false,
  },
];
