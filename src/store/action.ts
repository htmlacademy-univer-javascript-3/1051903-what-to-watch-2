import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction('moviepage/changeGenre', (genre) => {
  return {
    payload: genre,
  };
});

export const setMovies = createAction('moviepage/setMovies', (movies) => {
  return {
    payload: movies,
  };
});

export const loadFilms = createAction('moviepage/loadFilms', (films) => {
  return {
    payload: films,
  };
});

export const loadPromoFilm = createAction('moviepage/loadPromoFilm', (film) => {
  return {
    payload: film,
  };
});

export const setAuthStatus = createAction('user/setAuthStatus', (auth) => {
  return {
    payload: auth,
  };
});

export const loadSelectedFilm = createAction('moviepage/loadSelectedFilm', (film) => {
  return {
    payload: film,
  }
});

export const loadMoreLike = createAction('moviepage/loadMoreLike', (films) => {
  return {
    payload: films,
  }
});

export const loadComments = createAction('moviepage/loadComments', (comments) => {
  return {
    payload: comments,
  }
});

export const setUserData = createAction('user/setuserData', (userData) => {
  return {
    payload: userData,
  }
});