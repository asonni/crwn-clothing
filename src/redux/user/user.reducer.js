import { userActionsTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state, { type, payload }) => {
  if (typeof state === 'undefined') state = INITIAL_STATE;
  switch (type) {
    case userActionsTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      return state;
  }
};

export default userReducer;
