import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducers from './reducers';

export default () => {
  const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
  const devTools = ext && ext();

  const store = createStore(
    reducers,
    devTools,
  );

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('container'),
  );
};
