import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../reducer/counterSlice';

export const store = configureStore({
  reducer: {
    counter : counterSlice
  },
})

export default store;
