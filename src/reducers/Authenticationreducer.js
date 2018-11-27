import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {
  fetching: false,
  fetched: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE: {
      return initialState;
    }
    case 'SIGNIN_USER': case 'SIGNUP_USER': case 'FETCH_USER': {
      return {
        ...state,
        fetching: true
      };
    }
    case 'SIGNIN_USER_REJECTED': case 'SIGNUP_USER_REJECTED': case 'FETCH_USER_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case 'SIGNIN_USER_FULFILLED': case 'SIGNUP_USER_FULFILLED': case 'FETCH_USER_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;