import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction('moviepage/changeGenre', (genre) => ({
  payload: genre,
}));

export const setMovies = createAction('moviepage/setMovies', (movies) => ({
  payload: movies,
}));

export const loadFilms = createAction('moviepage/loadFilms', (films) => ({
  payload: films,
}));

export const loadPromoFilm = createAction(
  'moviepage/loadPromoFilm',
  (film) => ({
    payload: film,
  })
);

export const changeFavoriteFilms = createAction(
  'moviepage/changeFavoriteFilms',
  (favoriteFilms) => ({
    payload: favoriteFilms,
  })
);

export const loadFavFilms = createAction('moviepage/loadFavFilms', (films) => ({
  payload: films,
}));

export const setAuthStatus = createAction('user/setAuthStatus', (auth) => ({
  payload: auth,
}));

export const loadSelectedFilm = createAction(
  'moviepage/loadSelectedFilm',
  (film) => ({
    payload: film,
  })
);

export const loadMoreLike = createAction('moviepage/loadMoreLike', (films) => ({
  payload: films,
}));

export const loadComments = createAction(
  'moviepage/loadComments',
  (comments) => ({
    payload: comments,
  })
);

export const setUserData = createAction('user/setuserData', (userData) => ({
  payload: userData,
}));
