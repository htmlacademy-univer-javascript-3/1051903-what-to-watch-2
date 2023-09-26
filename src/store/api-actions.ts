import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import { loadFilms } from './action';
import { store } from '.';
import { AxiosInstance } from 'axios';

type AppDispatch = typeof store.dispatch;
type State = ReturnType<typeof store.getState>;

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance,
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get(APIRoute.Films);
    dispatch(loadFilms(data));
  }
);
