import userActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null
};

const userReducer = (state, { type, payload }) => {
  if (typeof state === 'undefined') state = INITIAL_STATE;
  switch (type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        errorMessage: null
      };
    case userActionTypes.SIGN_IN_FAILURE:
      return {
        ...this.state,
        errorMessage: payload
      };
    default:
      return state;
  }
};

export default userReducer;
