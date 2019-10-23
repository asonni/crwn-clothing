import cartActionTypes from './cart.types';
import {
  toggleCartHidden,
  addItem,
  removeItem,
  clearItemFromCart,
  clearCart
} from './cart.actions';

describe('toggleCartHidden action', () => {
  it('should create the toggleHidden action', () => {
    expect(toggleCartHidden().type).toEqual(cartActionTypes.TOGGLE_CART_HIDDEN);
  });
});

describe('addItem action', () => {
  it('should create the addItem action', () => {
    const mockItem = {
      id: 1
    };

    const action = addItem(mockItem);

    expect(action.type).toEqual(cartActionTypes.ADD_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('removeItem action', () => {
  it('should create the removeItem action', () => {
    const mockItem = {
      id: 1
    };

    const action = removeItem(mockItem);

    expect(action.type).toEqual(cartActionTypes.REMOVE_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('clearItemFromCart action', () => {
  it('should create the clearItemFromCart action', () => {
    const mockItem = {
      id: 1
    };

    const action = clearItemFromCart(mockItem);

    expect(action.type).toEqual(cartActionTypes.CLEAR_ITEM_FROM_CART);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('clearCart action', () => {
  it('should create the clearCart action', () => {
    expect(clearCart().type).toEqual(cartActionTypes.CLEAR_CART);
  });
});