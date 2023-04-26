import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectCartReducer = (state: RootState) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartVAT = createSelector(
  [selectCartTotal],
  (cartTotal) => cartTotal * 0.2
);

export const selectCartGrandTotal = createSelector(
  [selectCartTotal, selectCartVAT],
  (cartTotal, cartVAT) => cartTotal + cartVAT + 50
);
