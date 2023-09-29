import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../const';
import { loadFilms, loadSelectedFilm, setAuthStatus } from './action';
import { store } from '.';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../components/services/token';

type AppDispatch = typeof store.dispatch;
type State = ReturnType<typeof store.getState>;

export const fetchSelectedFilmAction = createAsyncThunk<void, any, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (filmId, { dispatch, extra: api }) => {
  try {
    debugger;
    const response = await api.get(APIRoute.SelectFilm.replace(':filmId', `${filmId}`));
    dispatch(loadSelectedFilm(response.data));
  } catch (error) {
    console.log(error)
  }
});

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  const response = await api.get(APIRoute.Films);
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

export const loginActon = createAsyncThunk<void, any, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token }} = await api.post(APIRoute.SignIn, { email, password });
    saveToken(token);
    dispatch(setAuthStatus(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.SignOut);
    dropToken();
    dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  }
);

