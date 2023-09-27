import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { selectFilmsByGenre } from './store/reducer';

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
        films={store.getState().films}
        filmTitle={Settings.filmTitle}
        genre={Settings.genre}
        releaseDate={Settings.releaseDate}
        genres = {store.getState().genres}
        selectFilmsByGenre = {selectFilmsByGenre}
      />
    </Provider>
  </React.StrictMode>
);
