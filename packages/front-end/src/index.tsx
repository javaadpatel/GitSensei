import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import * as appReducer from './store/reducers';
import { registerServiceWorker } from './service-worker';

const appStore = createStore(combineReducers({ ...appReducer }));

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);

registerServiceWorker();