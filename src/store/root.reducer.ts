import { combineReducers } from '@reduxjs/toolkit';

import { cartReducer } from './cart/cart.reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
