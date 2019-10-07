import userActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
  isSigningInWithEmail: false,
  isSigningInWithGoogle: false
};

const userReducer = (state, { type, payload }) => {
  if (typeof state === 'undefined') state = INITIAL_STATE;
  switch (type) {
    case userActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        isSigningInWithEmail: true
      };
    case userActionTypes.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        isSigningInWithGoogle: true
      };
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isSigningInWithEmail: false,
        isSigningInWithGoogle: false,
        errorMessage: null
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null
      };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
      return {
        ...this.state,
        isSigningInWithEmail: false,
        isSigningInWithGoogle: false,
        errorMessage: payload
      };
    default:
      return state;
  }
};

export default userReducer;
