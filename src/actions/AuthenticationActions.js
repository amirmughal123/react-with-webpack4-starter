const  signInAction = (values) => {
  return (dispatch) => {
    dispatch({ type: 'SIGNIN_USER' });

    fetch('http://localhost:4000/api/v1/users/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ ...values })
    })
    .then(response => response.json())
    .then(res => {
      dispatch({ type: 'SIGNIN_USER_FULFILLED', payload: { ...res } });
    }).catch((err) => {
      dispatch({ type: 'SIGNIN_USER_REJECTED', payload: err });
    })
  };
}

const signUpAction = (values) => {
  return (dispatch) => {
    dispatch({ type: 'SIGNUP_USER' });
    const { prefix, phoneNo } = values;

    fetch('http://localhost:4000/api/v1/users', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ ...values, phoneNo: `${prefix}${phoneNo}` })
    })
    .then(response => response.json())
    .then(res => {
      dispatch({ type: 'SIGNUP_USER_FULFILLED', payload: { ...res } });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_USER_REJECTED', payload: err });
    })
  };
}

export default { signInAction, signUpAction };
