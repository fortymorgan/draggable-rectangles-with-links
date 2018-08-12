import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducers from './reducers';

export default () => {
  const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
  const devTools = ext && ext();

  const args = ext ? [reducers, devTools] : [reducers];

  const store = createStore(...args);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('container'),
  );
};
