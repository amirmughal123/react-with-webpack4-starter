import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import reducers from './reducers';

export const history = createBrowserHistory();

export const store = createStore(
  connectRouter(history)(reducers),
  compose(applyMiddleware(routerMiddleware(history), promise(), thunk, createLogger()))
);