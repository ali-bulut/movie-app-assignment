import { Route } from 'react-router-dom';

interface Props {
  component: any;
  path: string;
  exact?: boolean;
}

const PublicRoute = ({ component: Component, path, exact }: Props) => {
  return <Route path={path} exact={exact} render={(props) => <Component {...props} />} />;
};

export default PublicRoute;
