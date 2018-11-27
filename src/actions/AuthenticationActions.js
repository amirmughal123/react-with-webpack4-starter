const  signInAction = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: 'SIGNIN_USER' });

    axios.post('http://localhost:4000/auth/login/', querystring.stringify({
      email,
      password
    })).then((response) => {
      dispatch({ type: 'SIGNIN_USER_FULFILLED', payload: { data: response.data } });
    }).catch((err) => {
      dispatch({ type: 'SIGNIN_USER_REJECTED', payload: err });
    });
  };
}

const signUpAction = ({ userName, email, password }) => {
  return (dispatch) => {
    dispatch({ type: 'SIGNUP_USER' });

    axios.post('http://localhost:4000/auth/signup/', querystring.stringify({
      userName,
      email,
      password
    })).then((response) => {
      dispatch({ type: 'SIGNUP_USER_FULFILLED', payload: { data: response.data } });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_USER_REJECTED', payload: err });
    });
  };
}

export default { signInAction, signUpAction };
