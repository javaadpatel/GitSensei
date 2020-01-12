import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './containers/App';
import { registerServiceWorker } from './service-worker';
import { rootReducer } from './store';

const appStore = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);

registerServiceWorker();