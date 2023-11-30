import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slicies';

export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
})