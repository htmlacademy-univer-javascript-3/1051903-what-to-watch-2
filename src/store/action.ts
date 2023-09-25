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
})
