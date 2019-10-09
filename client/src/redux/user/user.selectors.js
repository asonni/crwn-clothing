import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectIsSigningUp = createSelector(
  [selectUser],
  user => user.isSigningUp
);

export const selectIsSigningInWithEmail = createSelector(
  [selectUser],
  user => user.isSigningInWithEmail
);

export const selectIsSigningInWithGoogle = createSelector(
  [selectUser],
  user => user.isSigningInWithGoogle
);
