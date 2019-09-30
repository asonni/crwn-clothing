import { cartActionsTypes } from './cart.types';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state, { type, payload }) => {
  if (typeof state === 'undefined') state = INITIAL_STATE;
  switch (type) {
    case cartActionsTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActionsTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, payload]
      };
    default:
      return state;
  }
};

export default cartReducer;
