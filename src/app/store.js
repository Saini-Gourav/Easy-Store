import { configureStore } from '@reduxjs/toolkit'
import  gitUser  from '../features/gitUserSlice'
import cartReducer from '../features/cartSlice';
import  registerUser  from '../features/registerSlice';
import filterSlice from '../features/filterSlice';

export const store = configureStore({
  reducer: {
    app: gitUser,
    cart: cartReducer,
    register: registerUser,
    filter: filterSlice,
  },
})