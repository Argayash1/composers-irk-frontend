import { configureStore } from '@reduxjs/toolkit';
import search from './searchSlice/slice';
import news from './news/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: { search, news },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
