import { shopActionTypes } from './shop.types';

const INITIAL_STATE = {
  collections: null
};

const shopReducer = (state, { type, payload }) => {
  if (typeof state === 'undefined') state = INITIAL_STATE;
  switch (type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload
      };
    default:
      return state;
  }
};

export default shopReducer;
