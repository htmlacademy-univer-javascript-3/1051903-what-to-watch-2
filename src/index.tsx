import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';

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
    <App films={films} filmTitle={Settings.filmTitle} genre={Settings.genre} releaseDate={Settings.releaseDate}/>
  </React.StrictMode>
);
