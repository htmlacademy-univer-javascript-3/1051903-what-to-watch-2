import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import { loadFilms } from './action';
import { store } from '.';
import { AxiosInstance } from 'axios';

type AppDispatch = typeof store.dispatch;
type State = ReturnType<typeof store.getState>;

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  console.log('Thunk Function');
  console.log('Thafgawghwqerherhharon');
  const response = await api.get(APIRoute.Films);
//   console.log(response.data);

  dispatch(loadFilms(response.data));
});
