import { configureStore } from '@reduxjs/toolkit';
import search from './searchSlice/slice';

export const store = configureStore({
  reducer: { search },
});

export type RootState = ReturnType<typeof store.getState>;
