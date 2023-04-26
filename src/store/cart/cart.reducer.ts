import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IImage } from '@/types';

const addCartItem = (cartItems: ICartItem[], productToAdd: ICartItem) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem._id === productToAdd._id;
  });
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem._id === productToAdd._id
        ? { ...cartItem, quantity: cartItem.quantity + productToAdd.quantity }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: productToAdd.quantity }];
};

const removeCartItem = (
  cartItems: ICartItem[],
  cartItemToRemove: ICartItem
) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToRemove._id
  );
  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem._id !== cartItemToRemove._id
    );
  }

  // return back cart items with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem._id === cartItemToRemove._id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export interface ICartItem {
  _id: string;
  price: number;
  quantity: number;
  image: IImage;
  name: string;
}

interface IInitialState {
  isCartOpen: boolean;
  cartItems: ICartItem[];
}

const CART_INITIAL_STATE: IInitialState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    toggleIsCartOpen: (state) => {
      return { ...state, isCartOpen: !state.isCartOpen };
    },
    addItemToCart: (state, action: PayloadAction<ICartItem>) => {
      const newCartItems = addCartItem(state.cartItems, action.payload);
      localStorage.setItem('cart', JSON.stringify(newCartItems));
      return {
        ...state,
        cartItems: [...newCartItems],
      };
    },
    removeItemFromCart: (state, action: PayloadAction<ICartItem>) => {
      const newCartItems = removeCartItem(state.cartItems, action.payload);
      localStorage.setItem('cart', JSON.stringify(newCartItems));
      return {
        ...state,
        cartItems: [...newCartItems],
      };
    },
    removeAllCartItems: (state) => {
      localStorage.setItem('cart', JSON.stringify([]));
      return {
        ...state,
        cartItems: [],
      };
    },
    setCartItems: (state, action: PayloadAction<ICartItem[]>) => {
      localStorage.setItem('cart', JSON.stringify(action.payload));
      return {
        ...state,
        cartItems: action.payload,
      };
    },
  },
});

export const {
  toggleIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  removeAllCartItems,
  setCartItems,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
