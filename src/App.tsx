import { Route, Switch } from 'react-router-dom';
import { renderRoutes } from './routes/RouteRendering';
import MainContent from './views/MainContent';

const App = () => {
  return (
    <Route
      render={({ location }) => {
        return (
          <MainContent>
            <Switch location={location}>{renderRoutes()}</Switch>
          </MainContent>
        );
      }}
    />
  );
};

export default App;
