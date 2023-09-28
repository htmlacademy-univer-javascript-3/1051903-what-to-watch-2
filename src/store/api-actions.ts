import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../const';
import { loadFilms, setAuthStatus } from './action';
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

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.SignIn);
    dispatch(setAuthStatus(AuthorizationStatus.Auth));
  } catch (error) {
    dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    console.error(error)  
  }
});
