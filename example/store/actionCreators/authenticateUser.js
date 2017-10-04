import actionTypes from '../actionTypes'

export const handleLogin = () => dispatch => {
  return dispatch({ type: actionTypes.LOGIN });
};
