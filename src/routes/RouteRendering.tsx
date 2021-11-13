import routes from './routes';
import PublicRoute from './PublicRoute';
import { Redirect } from 'react-router-dom';

export const renderRoutes = () => {
  return routes.map((route, idx) =>
    !route.component ? (
      <Redirect key={idx} to="/" />
    ) : route.public ? (
      <PublicRoute key={route.path || idx} path={route.path} exact={route.exact} component={route.component} />
    ) : (
      // Private Route configuration can be added
      () => {}
    ),
  );
};
