import { configureStore } from '@reduxjs/toolkit';
import search from './search/slice';
import news from './news/slice';
import unionMember from './unionMember/slice';
import project from './project/slice';
import article from './article/slice';
import video from './video/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: { search, news, unionMember, project, article, video },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
