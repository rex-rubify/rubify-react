import actionTypes from '../actionTypes'

const initialState = { logged: false };

const authenticateUser = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {...state, logged: true}
    default:
      return state;
  }
};

export default authenticateUser
