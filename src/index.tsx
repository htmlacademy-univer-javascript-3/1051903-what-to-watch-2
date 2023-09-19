import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';
import { Provider } from 'react-redux';
import store from './store';
import { genres, selectFilmsByGenre } from './store/reducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Settings = {
  filmTitle: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: '2014',
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        films={films}
        filmTitle={Settings.filmTitle}
        genre={Settings.genre}
        releaseDate={Settings.releaseDate}
        genres = {genres}
        selectFilmsByGenre = {selectFilmsByGenre}
      />
    </Provider>
  </React.StrictMode>
);
