import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import authenticationReducer from './AuthenticationReducer';

const rootReducer = (history) => combineReducers({
  user: authenticationReducer,
  router: connectRouter(history)
})

export default rootReducer;
