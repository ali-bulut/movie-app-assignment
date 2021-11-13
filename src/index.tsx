import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import history from './history';
import configureStore from './store/StoreConfiguration';

// css
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);

reportWebVitals();
