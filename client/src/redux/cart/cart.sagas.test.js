import { takeLatest, put } from 'redux-saga/effects';

import userActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';
import { clearCartOnSignOut, onSignOutSuccess } from './cart.sagas';

describe('on sign-out success saga', () => {
  it('should trigger on SIGN_OUT_SUCCESS', async () => {
    const generator = onSignOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
    );
  });
});

describe('clear cart on sign-out saga', () => {
  it('should fire clearCart', () => {
    const generator = clearCartOnSignOut();
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});
